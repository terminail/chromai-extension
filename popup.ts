// popup.ts - Popup script for the Chromai extension

interface ApiCallRecord {
  id: string;
  url: string;
  method: string;
  question: string | null;
  questionTime: string;
  answerContent: string | null;
  answerTime: string;
  statusCode?: number;
  error?: string;
  service: string;
  protocol: string;
}

/**
 * Format timestamp for display
 */
function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    return date.toLocaleString();
  } catch (e) {
    return timestamp;
  }
}

/**
 * Format content for display (truncate if too long)
 */
function formatContent(content: string | null): string {
  if (!content) return 'No content';
  
  // Try to parse as JSON and format nicely
  try {
    const parsed = JSON.parse(content);
    content = JSON.stringify(parsed, null, 2);
  } catch (e) {
    // Not JSON, use as is
  }
  
  // Truncate if too long
  if (content.length > 500) {
    return content.substring(0, 500) + '...';
  }
  
  return content;
}

/**
 * Render API records in the popup
 */
function renderRecords(records: ApiCallRecord[]): void {
  const container = document.getElementById('records-container');
  if (!container) return;
  
  if (records.length === 0) {
    container.innerHTML = '<div class="empty">No API records yet</div>';
    return;
  }
  
  // Sort by question time (newest first)
  records.sort((a, b) => new Date(b.questionTime).getTime() - new Date(a.questionTime).getTime());
  
  let html = '';
  for (const record of records) {
    html += `
      <div class="record">
        <div class="record-header">
          ${record.service} - ${record.method} ${record.protocol}
        </div>
        <div class="record-details">
          <div><strong>URL:</strong> ${record.url}</div>
          ${record.statusCode ? `<div><strong>Status:</strong> ${record.statusCode}</div>` : ''}
          ${record.error ? `<div><strong>Error:</strong> ${record.error}</div>` : ''}
        </div>
        
        <div class="question">
          <div><strong>Question:</strong></div>
          <div>${formatContent(record.question)}</div>
          <div class="timestamp">${formatTimestamp(record.questionTime)}</div>
        </div>
        
        <div class="answer">
          <div><strong>Answer:</strong></div>
          <div>${formatContent(record.answerContent)}</div>
          <div class="timestamp">${formatTimestamp(record.answerTime)}</div>
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

/**
 * Update the monitoring status display
 */
function updateStatus(isMonitoring: boolean): void {
  const statusElement = document.getElementById('status');
  if (statusElement) {
    statusElement.textContent = isMonitoring ? 'Monitoring: ON' : 'Monitoring: OFF';
    statusElement.style.color = isMonitoring ? 'green' : 'red';
  }
}

/**
 * Load and display API records
 */
async function loadRecords(): Promise<void> {
  try {
    const response = await chrome.runtime.sendMessage({ type: 'GET_API_RECORDS' });
    if (response && response.records) {
      renderRecords(response.records);
    }
  } catch (error) {
    console.error('Error loading records:', error);
    document.getElementById('records-container')!.innerHTML = 
      '<div class="empty">Error loading records</div>';
  }
}

/**
 * Clear all API records
 */
async function clearRecords(): Promise<void> {
  try {
    await chrome.runtime.sendMessage({ type: 'CLEAR_API_RECORDS' });
    loadRecords();
  } catch (error) {
    console.error('Error clearing records:', error);
  }
}

/**
 * Toggle monitoring on/off
 */
async function toggleMonitoring(): Promise<void> {
  try {
    const response = await chrome.runtime.sendMessage({ type: 'TOGGLE_MONITORING' });
    if (response && typeof response.isMonitoring === 'boolean') {
      updateStatus(response.isMonitoring);
    }
  } catch (error) {
    console.error('Error toggling monitoring:', error);
  }
}

// Initialize when popup loads
document.addEventListener('DOMContentLoaded', () => {
  // Set up button event listeners
  document.getElementById('toggle-monitoring')?.addEventListener('click', toggleMonitoring);
  document.getElementById('clear-records')?.addEventListener('click', clearRecords);
  document.getElementById('refresh')?.addEventListener('click', loadRecords);
  
  // Load initial data
  loadRecords();
  
  // Try to get current monitoring status
  chrome.runtime.sendMessage({ type: 'GET_MONITORING_STATUS' })
    .then(response => {
      if (response && typeof response.isMonitoring === 'boolean') {
        updateStatus(response.isMonitoring);
      }
    })
    .catch(() => {
      // Default to showing as monitoring
      updateStatus(true);
    });
});