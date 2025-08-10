import { Router, Request, Response } from 'express';
import { validateContactForm, handleValidationErrors } from '../middleware/validation';
import { formRateLimiter } from '../middleware/security';
import { ContactFormData, PageMeta } from '../types';
import { getRecentPosts } from '../data/blogData';
import emailService from '../services/emailService';
import logger from '../utils/logger';
import { getCurrentPageName, generateCanonicalUrl } from '../utils/helpers';
import { config } from '../config';

const router = Router();

/**
 * Contact page GET route
 */
router.get('/', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Contact Best Construction Company Bangalore | Get Free Quote Karnataka',
    description: 'Contact Bangalore\'s leading construction company for free consultation & quotes. Expert builders available across Bangalore, Mysore & Ballari. Call +91 8049776616 or visit our offices.',
    keywords: 'contact construction company Bangalore, construction company near me Bangalore, builders contact Bangalore, construction consultation Bangalore, free quote construction Bangalore, construction company address Bangalore, construction services contact Karnataka',
    h1: 'Contact Bangalore\'s Premier Construction Company - Free Consultation Available'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(
    req.protocol,
    req.get('host') || '',
    req.originalUrl
  );

  const recentPosts = getRecentPosts(3);

  res.render('contact', {
    meta,
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
 * Contact form submission POST route
 */
router.post('/', 
  formRateLimiter,
  validateContactForm,
  handleValidationErrors,
  async (req: Request, res: Response) => {
    try {
      const contactData: ContactFormData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        type: req.body.type,
        plotsize: req.body.plotsize,
        message: req.body.message
      };

      // Send email
      const emailSent = await emailService.sendContactEmail(contactData);
      
      if (emailSent) {
        logger.info(`Contact form submitted successfully by ${contactData.email}`);
        
        // Return success response
        if (req.xhr || req.headers.accept?.indexOf('json') !== -1) {
          res.json({
            success: true,
            message: 'Thank you for your enquiry. We will get back to you soon!'
          });
        } else {
          res.send('OK');
        }
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      logger.error('Contact form submission error:', error);
      
      if (req.xhr || req.headers.accept?.indexOf('json') !== -1) {
        res.status(500).json({
          success: false,
          message: 'Failed to send your enquiry. Please try again later.'
        });
      } else {
        res.status(500).send('<p style="color:red;width:100%;">Failed to send your enquiry. Please try again later.</p>');
      }
    }
  }
);

/**
 * Footer form submission (AJAX endpoint)
 */
router.post('/footer', 
  formRateLimiter,
  validateContactForm,
  handleValidationErrors,
  async (req: Request, res: Response) => {
    try {
      const contactData: ContactFormData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        type: req.body.type,
        plotsize: req.body.plotsize,
        message: req.body.message
      };

      const emailSent = await emailService.sendContactEmail(contactData);
      
      if (emailSent) {
        logger.info(`Footer form submitted successfully by ${contactData.email}`);
        res.send('OK');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      logger.error('Footer form submission error:', error);
      res.status(500).send('<p style="color:red;width:100%;">Failed to send your enquiry. Please try again later.</p>');
    }
  }
);

export default router;
