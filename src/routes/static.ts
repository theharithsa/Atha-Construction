import { Router, Request, Response } from 'express';
import { PageMeta } from '../types';
import { generateCanonicalUrl, getCurrentPageName } from '../utils/helpers';
import { getRecentPosts } from '../data/blogData';
import { config } from '../config';

const router = Router();

/**
 * About page
 */
router.get('/about', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'About us | Residential Construction Companies in Bangalore',
    description: 'Learn about Atha Construction, the most reputable residential construction companies in Bangalore, which produces high-quality homes with creativity and skill.',
    keywords: 'residential construction companies in bangalore, Home Construction contractors In Bangalore, Atha construction in bangalore',
    h1: 'Atha Construction: Built on Experience, Driven by Vision'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(req.protocol, req.get('host') || '', req.originalUrl);

  const recentPosts = getRecentPosts(3);

  res.render('about', {
    meta,
    currentPage,
    canonicalUrl,
    baseUrl: config.baseUrl,
    analytics: config.analytics,
    // Footer conditional sections (about page shows all)
    showTestimonials: true,
    showBlogs: true,
    showWorkWithUs: true,
    showFAQ: true,
    recentBlogPosts: recentPosts,
    layout: 'main'
  });
});

/**
 * Services page
 */
router.get('/services', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Atha Construction services | Home architecture design',
    description: 'Atha Construction offers expert home architecture design services, blending creativity and functionality to bring your dream home to life. Contact us for customized solutions!',
    keywords: 'Home Architecture Design, Home Construction Services in Ballari',
    h1: 'Experience the Comfort'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(req.protocol, req.get('host') || '', req.originalUrl);

  // Define services data
  const services = [
    {
      title: 'Turnkey Construction',
      description: 'Comprehensive construction services from start to finish, ensuring hassle-free project delivery. From site preparation to final handover, we promise smooth execution with attention to detail, quality, and timelines, making your dream home a seamless reality.',
      image: 'assets/images/Turnkey-Construction.jpg',
      alt: 'Turnkey Construction'
    },
    {
      title: 'Architecture & Design',
      description: 'Crafting exclusive designs with precision, including 2D, 3D, and GFC plans. Our designs blend your vision, Vastu principles, and functionality to create spaces that are both aesthetically pleasing and perfectly suited to your needs.',
      image: 'assets/images/Architecture-&-Design.jpg',
      alt: 'Architecture & Design'
    },
    {
      title: 'Project Management',
      description: 'Expert project management services ensure timely approvals, meticulous quality control, and efficient timelines. We handle every detail with professionalism, so you can enjoy a stress-free construction experience with seamless coordination and superior results.',
      image: 'assets/images/Project-Management.jpg',
      alt: 'Project Management'
    },
    {
      title: 'Interior Design & Finishing',
      description: 'Transform your home with elegant interiors, including modular kitchens, custom wardrobes, and optimized layouts. Our tailored designs combine functionality with style to make every corner of your space both beautiful and practical.',
      image: 'assets/images/Interior-Design-&-Finishing.jpg',
      alt: 'Interior Design & Finishing'
    },
    {
      title: 'Premium Materials and Craftsmanship',
      description: 'We use trusted brands like UltraTech Cement, JSW Steel, and Asian Paints to guarantee lasting quality. Our commitment to superior materials and expert craftsmanship ensures a durable and elegant finish for every project.',
      image: 'assets/images/Premium-Materials-and-Craftsmanship.jpg',
      alt: 'Premium Materials and Craftsmanship'
    },
    {
      title: 'Extra Features',
      description: 'Elevate your home with seismic-resistant structures, future expansion readiness, and luxurious interiors on request. Our thoughtful additions prioritize safety, flexibility, and elegance, ensuring your home is prepared for tomorrow\'s needs.',
      image: 'assets/images/Extra-Features.jpg',
      alt: 'Extra Features'
    },
    {
      title: 'Home Automation',
      description: 'Incorporate cutting-edge smart systems and IoT integration into your home. Experience modern living with advanced automation, enabling seamless control of lighting, security, and appliances for unmatched convenience and efficiency.',
      image: 'assets/images/Automation-of-Process.jpg',
      alt: 'Home Automation'
    },
    {
      title: 'Amenities',
      description: 'Personalize your property with custom amenities like high-speed Wi-Fi, landscaped gardens, and recreational spaces. We design features that enhance your lifestyle, creating a perfect balance of comfort, functionality, and leisure.',
      image: 'assets/images/Amenities.jpg',
      alt: 'Amenities'
    }
  ];

  const recentPosts = getRecentPosts(3);

  res.render('services', {
    meta,
    services,
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
 * Packages page
 */
router.get('/packages', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'House Planners in Bangalore | Atha Construction Packages',
    description: 'Discover expert house planners in Bangalore with Atha Construction Packages. Tailored designs, quality construction, and affordable pricing. Visit us now!',
    keywords: 'Atha Construction Packages, house planners in bangalore, home architecture design',
    h1: 'Solid Presence, Built to Last'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(req.protocol, req.get('host') || '', req.originalUrl);

  const recentPosts = getRecentPosts(3);

  res.render('packages', {
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
 * Properties page
 */
router.get('/properties', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Villa Construction Company mysore | Atha construction',
    description: 'Explore exciting career opportunities with Atha Construction. Join our dynamic team and build your future with a leading name in the construction industry.',
    keywords: 'Villa Construction Company mysore, Villa Construction Company In Bangalore',
    h1: 'Explore Properties'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(req.protocol, req.get('host') || '', req.originalUrl);

  const recentPosts = getRecentPosts(3);

  res.render('properties', {
    meta,
    currentPage,
    canonicalUrl,
    baseUrl: config.baseUrl,
    analytics: config.analytics,
    firebase: config.firebase,
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
 * Gallery page
 */
router.get('/gallery', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Atha construction Gallery | Home designers In mysore',
    description: 'Explore the gallery of Atha Construction, top home designers in mysore. Discover innovative designs, quality craftsmanship, and bespoke solutions for your dream home.',
    keywords: 'Home Designers In mysore, Innovative designers in Bangalore',
    h1: 'Gallery'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(req.protocol, req.get('host') || '', req.originalUrl);

  const recentPosts = getRecentPosts(3);

  res.render('gallery', {
    meta,
    currentPage,
    canonicalUrl,
    baseUrl: config.baseUrl,
    analytics: config.analytics,
    firebase: config.firebase,
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
 * Thank you page
 */
router.get('/thankyou', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Thank You | Atha Construction',
    description: 'Thank you for contacting Atha Construction. We will get back to you soon.',
    keywords: 'Thank you, Atha Construction',
    h1: 'Thank You'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(req.protocol, req.get('host') || '', req.originalUrl);

  const recentPosts = getRecentPosts(3);

  res.render('thankyou', {
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

export default router;
