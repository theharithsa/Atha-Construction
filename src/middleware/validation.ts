import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { validateEmail, validateMobile, hasProhibitedContent } from '../utils/helpers';

/**
 * Contact form validation middleware - RELAXED
 * Validation rules have been made more permissive
 */
export const validateContactForm = [
  body('name')
    .notEmpty()
    .withMessage('Please enter your Name')
    .isLength({ min: 1, max: 100 }) // Increased max length, reduced min
    .withMessage('Name must be between 1 and 100 characters')
    .matches(/^[a-zA-Z\s\-\.\']+$/) // Allow more characters (hyphens, periods, apostrophes)
    .withMessage('Name can contain letters, spaces, hyphens, periods, and apostrophes'),

  body('email')
    .notEmpty()
    .withMessage('Please enter an e-mail address')
    .isEmail()
    .withMessage('Please enter a valid e-mail address')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true }) // Make phone optional, treat empty string as undefined
    .custom((value) => {
      if (value && !validateMobile(value)) {
        throw new Error('Enter valid mobile number');
      }
      return true;
    }),

  body('type')
    .optional({ checkFalsy: true }) // Make type optional
    .isIn(['residential', 'commercial', 'other']) // Added 'other' option
    .withMessage('Please select a valid construction type'),

  body('plotsize')
    .optional({ checkFalsy: true }) // Make plot size optional
    .isLength({ min: 1, max: 200 }) // Increased max length
    .withMessage('Plot size must be between 1 and 200 characters'),

  body('message')
    .optional()
    .isLength({ max: 1000 }) // Increased message limit from 200 to 1000
    .withMessage('Message too long (max 1000 characters)')
    .custom((value) => {
      // Remove prohibited content check for more flexibility
      return true;
    }),
];

/**
 * Career form validation middleware - RELAXED
 * Validation rules have been made more permissive
 */
export const validateCareerForm = [
  body('name')
    .notEmpty()
    .withMessage('Please enter your Name')
    .isLength({ min: 1, max: 100 }) // Increased max length, reduced min
    .withMessage('Name must be between 1 and 100 characters')
    .matches(/^[a-zA-Z\s\-\.\']+$/) // Allow more characters
    .withMessage('Name can contain letters, spaces, hyphens, periods, and apostrophes'),

  body('email')
    .notEmpty()
    .withMessage('Please enter an e-mail address')
    .isEmail()
    .withMessage('Please enter a valid e-mail address')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true }) // Make phone optional, treat empty string as undefined
    .custom((value) => {
      if (value && !validateMobile(value)) {
        throw new Error('Enter valid mobile number');
      }
      return true;
    }),

  body('city')
    .optional({ checkFalsy: true }) // Make city optional
    .isLength({ min: 1, max: 100 }) // Increased max length
    .withMessage('City must be between 1 and 100 characters'),

  body('post')
    .optional({ checkFalsy: true }) // Make position optional
    .isIn(['Sales', 'Architect', 'Jr. Architect', 'Project Manager', 'Supervisor', 'Site engineer', 'Other'])
    .withMessage('Invalid position selected'),

  body('experience')
    .optional({ checkFalsy: true }) // Make experience optional
    .isIn(['Less than 2 Years', '2-5 Years', 'More than 5 Years', 'Not specified'])
    .withMessage('Invalid experience level'),

  body('message')
    .optional()
    .isLength({ max: 2000 }) // Increased message limit from 500 to 2000
    .withMessage('Message too long (max 2000 characters)')
    .custom((value) => {
      // Remove prohibited content check for more flexibility
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
 * File upload validation for resume - RELAXED
 * File upload validation has been made more permissive
 */
export const validateResumeUpload = (req: Request, res: Response, next: NextFunction): void => {
  if (req.file) {
    // Allow more file types including images and text files
    const allowedTypes = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'application/rtf',
      'image/jpeg',
      'image/jpg',
      'image/png'
    ];
    const maxSize = 25 * 1024 * 1024; // 25MB (increased from 5MB)
    
    if (!allowedTypes.includes(req.file.mimetype)) {
      res.status(400).json({
        success: false,
        message: 'Allowed file types: PDF, DOC, DOCX, TXT, RTF, JPG, JPEG, PNG'
      });
      return;
    }
    
    if (req.file.size > maxSize) {
      res.status(400).json({
        success: false,
        message: 'File size must be less than 25MB'
      });
      return;
    }
  }
  
  next();
};
