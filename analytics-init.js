// Import and initialize Vercel Analytics
import { inject } from '@vercel/analytics';

// Initialize analytics with automatic mode detection
inject({
  mode: 'auto',
  debug: true
});
