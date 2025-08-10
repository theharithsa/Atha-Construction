import helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config';

/**
 * Rate limiting middleware - DISABLED
 * Rate limiting has been disabled for unrestricted access
 */
export const rateLimiter = (req: Request, res: Response, next: NextFunction): void => {
  // Rate limiting disabled - allow all requests
  next();
};

/**
 * Form rate limiting middleware - DISABLED
 * Form rate limiting has been disabled for unrestricted form submissions
 */
export const formRateLimiter = (req: Request, res: Response, next: NextFunction): void => {
  // Form rate limiting disabled - allow all form submissions
  next();
};

/**
 * Asset rate limiting middleware - DISABLED
 * Asset rate limiting has been disabled for unrestricted access to static resources
 */
export const assetRateLimiter = (req: Request, res: Response, next: NextFunction): void => {
  // Asset rate limiting disabled - allow unlimited asset requests
  next();
};

/**
 * Security headers middleware - RELAXED
 * Security headers have been relaxed for more permissive access
 */
export const securityHeaders = helmet({
  contentSecurityPolicy: false, // Disabled for unrestricted content loading
  crossOriginEmbedderPolicy: false, // Disabled for embedded content
  crossOriginResourcePolicy: false, // Disabled for cross-origin resources
  hsts: false, // HTTP Strict Transport Security disabled
  xssFilter: false, // XSS filter disabled for compatibility
});

/**
 * CORS middleware - PERMISSIVE
 * CORS policy has been made more permissive to allow requests from any origin
 */
export const corsOptions = {
  origin: true, // Allow all origins
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
};

/**
 * Input sanitization middleware - RELAXED
 * Input sanitization has been relaxed while maintaining basic security
 */
export const sanitizeInput = (req: Request, res: Response, next: NextFunction): void => {
  // Recursively sanitize all string inputs (relaxed sanitization)
  const sanitize = (obj: any): any => {
    if (typeof obj === 'string') {
      // Only trim whitespace, allow more characters for flexibility
      return obj.trim();
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

  // Rate limit error handling removed since rate limiting is disabled
  
  next(error);
};
