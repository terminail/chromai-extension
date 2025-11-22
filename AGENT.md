# API Monitor - Agent Instructions

## Project Architecture Overview

This is a Chrome extension for monitoring API streaming data from AI services. The extension follows a three-tier architecture:

1. **Inject Script** (`inject.ts`) - Runs in the webpage context to intercept API requests
2. **Content Script** (`content-script.ts`) - Acts as a bridge between the page and extension
3. **Service Worker** (`service-worker.ts`) - Handles background processing and communication with external services

## Key Design Principles for AI Agents

### 1. Message-Centric Communication
- All components communicate through structured messages (e.g., STREAMING_STARTED)
- When enhancing functionality, ensure message interfaces are updated in `types.ts` and handled consistently across all components
- Always document message types and structures in the listener files with clear JSDoc comments

### 2. Service-Specific Handler Pattern
- Each AI service (Doubao, DeepSeek, etc.) has its own handler in `request_response_handler/`
- Service-specific logic (like request payload parsing) should be contained within these handlers
- The inject script should avoid service-specific parsing to prevent bloat

### 3. Endpoint-Specific Monitoring
- Only explicitly specified endpoints should be processed
- Always add explicit URL/path filtering in inject scripts and service workers
- Avoid unintended interception of other API calls

### 4. Component Isolation
- Each component runs in an isolated execution environment
- Use proper message passing mechanisms between components
- Never assume shared state between components

## Project Structure
src/
├── inject.ts                    # Page context - API interception
├── content-script.ts            # Bridge - message passing
├── service-worker.ts            # Background - storage & processing
├── request_response_handler/    # Service-specific handlers
│   ├── doubao.ts               # Doubao service handler
│   └── deepseek.ts             # DeepSeek service handler
├── types.ts                    # Shared type definitions
├── config.ts                   # Shared configuration
└── manifest.json               # Extension configuration

## Architecture Rules
- **inject.ts**: Pure interception, no Chrome APIs
- **content-script.ts**: Message bridge, adds tab context
- **service-worker.ts**: Storage, cross-tab coordination
- **request_response_handler**: Service-specific logic

## Message Flow
inject.ts → (window.postMessage) → content-script.ts → (chrome.runtime) → service-worker.ts

## Key Patterns
- Use `recordId` to track question/answer pairs
- SSE handling: `onprogress` for XHR, Streams API for fetch
- One-direction data flow only

## Development Notes
- Manifest V3 required
- TypeScript strict mode
- No bidirectional inject↔content communication

## Coding Standards

### TypeScript Interfaces
- Define interfaces in `types.ts` for all message types
- Use specific interfaces for service-specific payloads (e.g., `DoubaoRequestPayload`)
- Maintain backward compatibility when modifying existing interfaces

### Logging Conventions
- Use consistent, distinguishable log prefixes:
  - 🔴 [INJECT] for inject script
  - 🟢 [CONTENT] for content script
  - 🔵 [SERVICE] for service worker

### Error Handling
- Do not remove entries from activeStreams during error handling
- Errors may be temporary and the stream might recover
- Let normal completion mechanisms handle cleanup

## File Structure Guidelines

```
chrome-extmonitor/
├── inject.ts                    # Injected script (page context)
├── content-script.ts            # Content script (isolated world)
├── service-worker.ts            # Background processing
├── types.ts                     # Shared type definitions
├── config.ts                    # Shared configuration
├── request_response_handler/
│   ├── doubao.ts               # Doubao service handler
│   └── deepseek.ts             # DeepSeek service handler
└── server/                     # External streaming server (FastAPI)
```

## Common Tasks and Patterns

### Adding Support for a New Service
1. Add configuration to `config.ts`
2. Create a new handler file in `request_response_handler/`
3. Register the handler in `service-worker.ts`
4. Update `types.ts` with any new interfaces
5. Add service-specific parsing logic in the handler

### Modifying Message Flow
1. Update the interface in `types.ts`
2. Modify the sender (usually `inject.ts`)
3. Update the receiver (usually `service-worker.ts`)

### Error Handling
- Log errors with appropriate context
- Do not break the message flow for recoverable errors
- Clean up resources only on normal completion, not on errors

## Important Constraints

### Technical Constraints
- Inject scripts cannot use ES6 import statements
- All data should remain in memory only (no persistent storage)
- Extension components must not include server-side dependencies

### Process Constraints
- Never auto-commit changes without explicit user approval
- Follow the established patterns for component communication
- Maintain consistency with existing code style and structure
- **Do not auto-commit any changes** - all changes must be reviewed by the user
- **Run unit and integration tests** before considering any changes complete
- **Auto-build the extension** to ensure it's ready for installation after changes

## Build and Development

### TypeScript Compilation
- Compiled files should go directly to designated subdirectories under `dist/`
- Avoid intermediate or nested directory creation
- Update `copy-assets.cjs` when renaming source directories

### Python Dependencies
- Server dependencies managed via `requirements.txt`
- `aiohttp` is the core library for HTTP and WebSocket functionality in the server components

## Testing Guidelines

### Unit Testing
- Use Jest as the testing framework for TypeScript/JavaScript code
- Place test files in the `__tests__` directory with the `.test.ts` extension
- Focus on testing pure functions and business logic rather than browser APIs
- Mock external dependencies and Chrome APIs when needed
- Test both success and error cases
- Use real payload structures from actual API responses for accuracy

### Integration Testing
- Test the complete flow from request interception to data processing
- Verify message passing between components works correctly
- Test with actual service configurations from `config.ts`
- Validate that service-specific handlers correctly process real-world payloads
- Ensure error handling works across component boundaries

### Test Structure
- Group related tests in `describe` blocks by component or functionality
- Use descriptive test names that clearly state what is being tested
- Follow the Arrange-Act-Assert pattern in test cases
- Keep tests independent and avoid shared state between tests

### Running Tests
- Use `npm test` to run all tests
- Ensure tests pass before submitting changes
- Add new tests when adding new functionality
- Update existing tests when modifying existing functionality

### Batch Code Changes
- When making changes across multiple files, always run `npm test` to verify all tests pass
- Run tests after each significant change to catch issues early
- Ensure both unit and integration tests pass before considering batch changes complete
- Use `npm test -- --watch` for continuous testing during development
- Verify that the extension builds successfully after batch changes with `npm run build`

## Troubleshooting Common Issues

### Stream Correlation Problems
- Ensure record IDs are preserved for streaming data matching
- Enhance IDs with tab context when available, but never replace completely

### Message Passing Failures
- Verify message interfaces are consistent across components
- Check that all message types are handled in receiver components
- Ensure proper error handling in message listeners

### Service-Specific Parsing Issues
- Validate the request payload structure for the specific service
- Test with actual API responses from the service
- Handle both string and object payload formats

This document is intended to help AI agents understand the project structure, conventions, and constraints to work effectively with this codebase.