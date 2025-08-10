import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { engine } from 'express-handlebars';
import path from 'path';

// Import configuration and middleware
import { config, validateConfig } from './config';
import { 
  securityHeaders, 
  rateLimiter, 
  assetRateLimiter,
  corsOptions, 
  sanitizeInput, 
  securityErrorHandler 
} from './middleware/security';
import logger from './utils/logger';

// Import routes
import routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.validateEnvironment();
    this.initializeMiddleware();
    this.initializeTemplateEngine();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private validateEnvironment(): void {
    try {
      validateConfig();
      logger.info('Environment configuration validated successfully');
    } catch (error) {
      logger.error('Environment validation failed:', error);
      // Do not exit in serverless/Vercel environment
    }
  }

  private initializeMiddleware(): void {
    // Security middleware
    this.app.use(securityHeaders);
    this.app.use(cors(corsOptions));
    
    // Rate limiting removed for unrestricted access
    // Note: All rate limiters have been disabled
    
    // Compression
    this.app.use(compression());
    
    // Body parsing - Increased limits for larger requests
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    
    // Cookie parsing
    this.app.use(cookieParser());
    
    // Session management - More permissive settings
    this.app.use(session({
      secret: config.session.secret,
      resave: true, // Allow session to be saved even if not modified
      saveUninitialized: true, // Allow uninitialized sessions to be saved
      cookie: {
        secure: false, // Allow non-HTTPS cookies
        httpOnly: false, // Allow client-side access to cookies
        maxAge: config.session.maxAge * 10 // Extended session lifetime (10x longer)
      }
    }));
    
    // Input sanitization
    this.app.use(sanitizeInput);
    
    // Static files with caching headers
    this.app.use('/assets', express.static(path.join(__dirname, '../public/assets'), {
      maxAge: '30d', // Cache for 30 days
      setHeaders: (res, filePath) => {
        // Set proper CORS headers for assets
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        
        // Set caching based on file type
        if (filePath.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/i)) {
          res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 days for images
        } else if (filePath.match(/\.(css|js)$/i)) {
          res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day for CSS/JS
        }
      }
    }));
    this.app.use('/uploads', express.static(config.paths.uploads, {
      maxAge: '7d', // Cache uploads for 7 days
      setHeaders: (res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      }
    }));
    
    // Request logging
    if (config.nodeEnv === 'development') {
      this.app.use((req, res, next) => {
        logger.http(`${req.method} ${req.path} - ${req.ip}`);
        next();
      });
    }
    
    logger.info('Middleware initialized successfully');
  }

  private initializeTemplateEngine(): void {
    // Configure Handlebars
    this.app.engine('hbs', engine({
      extname: '.hbs',
      defaultLayout: 'main',
      // Resolve views from configured path to work from dist
      layoutsDir: path.join(config.paths.views, 'layouts'),
      partialsDir: path.join(config.paths.views, 'partials'),
      helpers: {
        eq: (a: any, b: any) => a === b,
        ne: (a: any, b: any) => a !== b,
        json: (context: any) => JSON.stringify(context),
        formatDate: (date: string) => {
          return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        stripHtml: (html: string) => {
          return html.replace(/<[^>]*>/g, '');
        },
        truncate: (str: string, len: number) => {
          if (str && str.length > len) {
            return str.substring(0, len) + '...';
          }
          return str;
        }
      }
    }));
    
    this.app.set('view engine', 'hbs');
    // Use configured views path
    this.app.set('views', config.paths.views);
    
    logger.info('Template engine initialized successfully');
  }

  private initializeRoutes(): void {
    // Health check endpoint
    this.app.get('/health', (req, res) => {
      res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: config.nodeEnv
      });
    });
    
    // Main routes
    this.app.use('/', routes);
    
    // 404 handler
    this.app.use('*', (req, res) => {
      logger.warn(`404 - Page not found: ${req.originalUrl}`);
      res.status(404).render('404', {
        meta: {
          title: 'Page Not Found | Atha Construction',
          description: 'The page you are looking for does not exist.',
          keywords: 'error, page not found',
          h1: 'Page Not Found'
        },
        baseUrl: config.baseUrl,
        layout: 'main'
      });
    });
    
    logger.info('Routes initialized successfully');
  }

  private initializeErrorHandling(): void {
    // Security error handler
    this.app.use(securityErrorHandler);
    
    // Global error handler
    this.app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
      logger.error('Unhandled error:', error);
      
      // Don't leak error details in production
      const message = config.nodeEnv === 'production' 
        ? 'Internal Server Error' 
        : error.message;
      
      if (req.xhr || req.headers.accept?.indexOf('json') !== -1) {
        res.status(500).json({
          success: false,
          message,
          ...(config.nodeEnv === 'development' && { stack: error.stack })
        });
      } else {
        res.status(500).render('500', {
          meta: {
            title: 'Server Error | Atha Construction',
            description: 'An internal server error occurred.',
            keywords: 'error, server error',
            h1: 'Server Error'
          },
          message,
          baseUrl: config.baseUrl,
          layout: 'main'
        });
      }
    });
    
    logger.info('Error handling initialized successfully');
  }

  public listen(): void {
    this.app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
      logger.info(`Base URL: ${config.baseUrl}`);
    });
  }
}

export default App;
