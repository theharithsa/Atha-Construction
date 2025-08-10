import winston from 'winston';
import path from 'path';
import fs from 'fs';
import { config } from '../config';

// Define log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define colors for each level
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

// Add colors to winston
winston.addColors(colors);

// Define log format
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Detect serverless / read-only environments (like Vercel)
const isServerless = Boolean(process.env.VERCEL || process.env.AWS_REGION || process.env.NOW_REGION);

// Always include console logging
const transports: winston.transport[] = [
  new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  }),
];

// Include file transports only when filesystem is writable (not serverless)
if (!isServerless) {
  const logsDir = path.join(process.cwd(), 'logs');
  try {
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    transports.push(
      new winston.transports.File({
        filename: path.join(logsDir, 'error.log'),
        level: 'error',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      }),
      new winston.transports.File({
        filename: path.join(logsDir, 'combined.log'),
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      })
    );
  } catch {
    // If creating log directory fails for any reason, skip file transports
  }
}

// Create the logger
const logger = winston.createLogger({
  level: config.nodeEnv === 'development' ? 'debug' : 'warn',
  levels,
  format,
  transports,
});

export default logger;
