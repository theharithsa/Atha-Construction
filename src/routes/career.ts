import { Router, Request, Response } from 'express';
import multer from 'multer';
import { validateCareerForm, handleValidationErrors, validateResumeUpload } from '../middleware/validation';
import { formRateLimiter } from '../middleware/security';
import { CareerFormData, PageMeta } from '../types';
import { getRecentPosts } from '../data/blogData';
import emailService from '../services/emailService';
import logger from '../utils/logger';
import { getCurrentPageName, generateCanonicalUrl } from '../utils/helpers';
import { config } from '../config';

const router = Router();

// Configure multer for file uploads - Increased limits and more file types
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024, // 25MB limit (increased from 5MB)
  },
  fileFilter: (req, file, cb) => {
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
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Allowed file types: PDF, DOC, DOCX, TXT, RTF, JPG, JPEG, PNG'));
    }
  }
});

/**
 * Career page GET route
 */
router.get('/', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Atha construction | Atha construction Career',
    description: 'Explore exciting career opportunities with Atha Construction. Join our dynamic team and build your future with a leading name in the construction industry.',
    keywords: 'Top Construction Company In Ballari, Home Construction In Ballari, Construction Companies In Bangalore, Villa Construction Company In Bangalore',
    h1: 'Atha construction Career'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(
    req.protocol,
    req.get('host') || '',
    req.originalUrl
  );

  // Define available positions
  const positions = [
    {
      title: 'Sales',
      description: 'Dynamic and highly energetic individuals are needed who have pleasing personality as well as good communication skills. Preference will be given to people with call center experience.',
      qualification: 'Graduate',
      experience: '1 year'
    },
    {
      title: 'Architect',
      description: 'Design innovative and functional spaces, ensuring aesthetic and structural excellence in all projects.',
      qualification: 'Graduate',
      experience: '4 years'
    },
    {
      title: 'Jr. Architect',
      description: 'Design innovative and functional spaces, ensuring aesthetic and structural excellence in all projects.',
      qualification: 'Graduate',
      experience: '1 year'
    },
    {
      title: 'Project Manager',
      description: 'Oversee construction projects from planning to completion, ensuring timely delivery, quality, and cost efficiency.',
      qualification: 'Graduate',
      experience: '8-10 years'
    },
    {
      title: 'Supervisor',
      description: 'Manage on-site activities, ensuring adherence to safety, quality standards, and project timelines.',
      qualification: 'Graduate',
      experience: '4 years'
    },
    {
      title: 'Site engineer',
      description: 'Manage on-site activities, ensuring adherence to safety, quality standards, and project timelines.',
      qualification: 'Graduate',
      experience: '4-6 years'
    }
  ];

  const recentPosts = getRecentPosts(3);

  res.render('careers', {
    meta,
    positions,
    currentPage,
    canonicalUrl,
    baseUrl: config.baseUrl,
    analytics: config.analytics,
    // Footer conditional sections
    showTestimonials: false,
    showBlogs: false,
    showWorkWithUs: false,
    showFAQ: true,
    recentBlogPosts: recentPosts,
    layout: 'main'
  });
});

/**
 * Career application submission POST route
 */
router.post('/', 
  formRateLimiter,
  upload.single('files'),
  validateResumeUpload,
  validateCareerForm,
  handleValidationErrors,
  async (req: Request, res: Response) => {
    try {
      const careerData: CareerFormData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        post: req.body.post,
        experience: req.body.experience,
        message: req.body.msg,
        resume: req.file
      };

      // Send email
      const emailSent = await emailService.sendCareerEmail(careerData);
      
      if (emailSent) {
        logger.info(`Career application submitted successfully by ${careerData.email} for ${careerData.post}`);
        
        // Return success response
        if (req.xhr || req.headers.accept?.indexOf('json') !== -1) {
          res.json({
            success: true,
            message: 'Thank you for your application. We will review it and get back to you soon!'
          });
        } else {
          res.send('OK');
        }
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      logger.error('Career application submission error:', error);
      
      if (req.xhr || req.headers.accept?.indexOf('json') !== -1) {
        res.status(500).json({
          success: false,
          message: 'Failed to submit your application. Please try again later.'
        });
      } else {
        res.status(500).send('<p style="color:red;width:100%;">Failed to submit your application. Please try again later.</p>');
      }
    }
  }
);

export default router;
