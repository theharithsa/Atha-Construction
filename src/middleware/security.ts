import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

/**
 * Rate limiting middleware
 */
export const rateLimiter = rateLimit({
  windowMs: config.security.rateLimitWindowMs, // 15 minutes
  max: config.security.rateLimitMaxRequests, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

/**
 * Stricter rate limiting for form submissions
 */
export const formRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 form submissions per windowMs
  message: {
    error: 'Too many form submissions from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Lenient rate limiting for static assets (images, css, js)
 */
export const assetRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 500, // allow 500 asset requests per IP per 5 minutes
  message: {
    error: 'Too many asset requests, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Skip rate limiting for asset files in development
  skip: (req) => {
    return config.nodeEnv === 'development';
  },
});

/**
 * Security headers middleware
 */
export const securityHeaders = helmet({
  contentSecurityPolicy: false, // Disabled for development
  crossOriginEmbedderPolicy: false,
});

/**
 * CORS middleware
 */
export const corsOptions = {
  origin: function (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      config.baseUrl,
      'https://athaconstruction.in',
      'https://www.athaconstruction.in'
    ];
    
    if (config.nodeEnv === 'development') {
      allowedOrigins.push('http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3001', 'http://127.0.0.1:3001');
    }
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

/**
 * Input sanitization middleware
 */
export const sanitizeInput = (req: Request, res: Response, next: NextFunction): void => {
  // Recursively sanitize all string inputs
  const sanitize = (obj: any): any => {
    if (typeof obj === 'string') {
      return obj.trim().replace(/[<>]/g, '');
    }
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = sanitize(obj[key]);
        }
      }
    }
    return obj;
  };
  
  req.body = sanitize(req.body);
  req.query = sanitize(req.query);
  req.params = sanitize(req.params);
  
  next();
};

/**
 * Error handling middleware for security-related errors
 */
export const securityErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  if (error.message.includes('CORS')) {
    res.status(403).json({
      error: 'CORS policy violation'
    });
    return;
  }
  
  if (error.message.includes('rate limit')) {
    res.status(429).json({
      error: 'Rate limit exceeded'
    });
    return;
  }
  
  next(error);
};
