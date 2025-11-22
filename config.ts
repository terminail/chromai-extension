// config.ts - Shared service configuration for the Chromai Extension

import { MonitoredServiceConfig } from './types.js';

/**
 * Define the services we want to monitor
 * Note: Doubao has two endpoint versions that require separate handlers:
 * 1. Legacy: https://www.doubao.com/chat/completion* (service name: doubao)
 * 2. Samantha: https://www.doubao.com/samantha/chat/completion* (service name: doubao_samantha)
 */
export const monitoredServices: MonitoredServiceConfig[] = [
  {
    name: 'DeepSeek',
    serviceName: 'deepseek',
    baseUrl: 'chat.deepseek.com',
    requestPatterns: [
      'https://chat.deepseek.com/api/v0/chat/completion*'
    ]
  },
  {
    name: 'Doubao',
    serviceName: 'doubao',
    baseUrl: 'www.doubao.com',
    requestPatterns: [
      'https://www.doubao.com/api/v3/chat/completions*',
      'https://www.doubao.com/api/v3/completions*',
      'https://www.doubao.com/chat/completion*'
    ]
  },
  {
    name: 'Doubao Samantha',
    serviceName: 'doubao_samantha',
    baseUrl: 'www.doubao.com',
    requestPatterns: [
      'https://www.doubao.com/samantha/chat/completion*'
    ]
  }
];