import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { validateEmail, validateMobile, hasProhibitedContent } from '../utils/helpers';

/**
 * Contact form validation middleware
 */
export const validateContactForm = [
  body('name')
    .notEmpty()
    .withMessage('Please enter your Name')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),

  body('email')
    .notEmpty()
    .withMessage('Please enter an e-mail address')
    .isEmail()
    .withMessage('Please enter a valid e-mail address')
    .normalizeEmail(),

  body('phone')
    .notEmpty()
    .withMessage('Please enter your phone number')
    .custom((value) => {
      if (!validateMobile(value)) {
        throw new Error('Enter 10 digit mobile number');
      }
      return true;
    }),

  body('type')
    .notEmpty()
    .withMessage('Please select construction type')
    .isIn(['residential', 'commercial'])
    .withMessage('Invalid construction type'),

  body('plotsize')
    .notEmpty()
    .withMessage('Please enter your plot size')
    .isLength({ min: 1, max: 100 })
    .withMessage('Plot size must be between 1 and 100 characters'),

  body('message')
    .optional()
    .isLength({ max: 200 })
    .withMessage('Characters limit 200 only')
    .custom((value) => {
      if (value && hasProhibitedContent(value)) {
        throw new Error('Invalid Message');
      }
      return true;
    }),
];

/**
 * Career form validation middleware
 */
export const validateCareerForm = [
  body('name')
    .notEmpty()
    .withMessage('Please enter your Name')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),

  body('email')
    .notEmpty()
    .withMessage('Please enter an e-mail address')
    .isEmail()
    .withMessage('Please enter a valid e-mail address')
    .normalizeEmail(),

  body('phone')
    .notEmpty()
    .withMessage('Please enter your phone number')
    .custom((value) => {
      if (!validateMobile(value)) {
        throw new Error('Enter 10 digit mobile number');
      }
      return true;
    }),

  body('city')
    .notEmpty()
    .withMessage('Please enter your city')
    .isLength({ min: 2, max: 50 })
    .withMessage('City must be between 2 and 50 characters'),

  body('post')
    .notEmpty()
    .withMessage('Please select a position')
    .isIn(['Sales', 'Architect', 'Jr. Architect', 'Project Manager', 'Supervisor', 'Site engineer'])
    .withMessage('Invalid position selected'),

  body('experience')
    .notEmpty()
    .withMessage('Please select your experience level')
    .isIn(['Less than 2 Years', '2-5 Years', 'More than 5 Years'])
    .withMessage('Invalid experience level'),

  body('message')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Message too long (max 500 characters)')
    .custom((value) => {
      if (value && hasProhibitedContent(value)) {
        throw new Error('Invalid Message');
      }
      return true;
    }),
];

/**
 * Handle validation errors middleware
 */
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0];
    
    // Return JSON response for API calls
    if (req.xhr || req.headers.accept?.indexOf('json') !== -1) {
      res.status(400).json({
        success: false,
        message: firstError.msg,
        errors: errors.array()
      });
      return;
    }
    
    // Return HTML response for form submissions
    res.status(400).send(`<p style="color:red;width:100%;">${firstError.msg}</p>`);
    return;
  }
  
  next();
};

/**
 * File upload validation for resume
 */
export const validateResumeUpload = (req: Request, res: Response, next: NextFunction): void => {
  if (req.file) {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!allowedTypes.includes(req.file.mimetype)) {
      res.status(400).json({
        success: false,
        message: 'Only PDF and DOC files are allowed'
      });
      return;
    }
    
    if (req.file.size > maxSize) {
      res.status(400).json({
        success: false,
        message: 'File size must be less than 5MB'
      });
      return;
    }
  }
  
  next();
};
