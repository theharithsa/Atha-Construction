import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

export const config = {
  // Server Configuration
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  // Prefer explicit BASE_URL, else Vercel-provided host, else localhost
  baseUrl: ((): string => {
    if (process.env.BASE_URL) return process.env.BASE_URL;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
  })(),

  // Email Configuration
  email: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
    from: process.env.FROM_EMAIL || 'noreply@athaconstruction.in',
    to: process.env.TO_EMAIL || 'info@athaconstructions.in',
  },

  // Project Configuration
  project: {
    name: process.env.PROJECT_NAME || 'Atha Construction',
    domain: process.env.FORM_DOMAIN || 'athaconstruction.in',
  },

  // Session Configuration - Extended for longer sessions
  session: {
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
    maxAge: parseInt(process.env.SESSION_MAX_AGE || '864000000', 10), // 10 days (increased from 1 day)
  },

  // Security Configuration - Rate limiting disabled
  security: {
    rateLimitWindowMs: 0, // Rate limiting disabled
    rateLimitMaxRequests: 0, // Rate limiting disabled
  },

  // Firebase Configuration (Optional)
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID || '',
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
    clientId: process.env.FIREBASE_CLIENT_ID || '',
    authUri: process.env.FIREBASE_AUTH_URI || 'https://accounts.google.com/o/oauth2/auth',
    tokenUri: process.env.FIREBASE_TOKEN_URI || 'https://oauth2.googleapis.com/token',
  },

  // Analytics Configuration
  analytics: {
    gaTrackingId: process.env.GA_TRACKING_ID || 'G-GNYXP1XF3S',
    gtmId: process.env.GTM_ID || 'GTM-K573RZP7', // Updated with new GTM ID
  },

  // Redis Configuration
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },

  // Static files and views
  paths: {
    // Use process.cwd() so paths resolve correctly in Vercel serverless and local/dist
    static: path.join(process.cwd(), 'public'),
    views: path.join(process.cwd(), 'src/views'),
    uploads: path.join(process.cwd(), 'uploads'),
  },
};

// Validation
export const validateConfig = (): void => {
  const requiredEnvVars = ['SMTP_USER', 'SMTP_PASS'];
  
  const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missingVars.length > 0 && config.nodeEnv === 'production') {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
};
