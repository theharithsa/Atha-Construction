import App from './app';
import logger from './utils/logger';
import emailService from './services/emailService';

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});

// Initialize and start the application
async function startServer(): Promise<void> {
  try {
    // Test email service connection (optional - disabled in development)
    if (process.env.NODE_ENV === 'production') {
      await emailService.testConnection();
    }
    
    // Create and start the app
    const app = new App();
    app.listen();
    
    logger.info('Atha Construction website started successfully');
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
startServer();
