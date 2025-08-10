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
    title: 'About Atha Construction | Leading Residential Builders in Bangalore Karnataka',
    description: 'Discover Atha Construction - Bangalore\'s trusted residential construction company with 8+ years experience. Expert builders specializing in quality homes, villas & commercial projects across Karnataka.',
    keywords: 'residential construction company Bangalore, home builders Bangalore Karnataka, construction company near me Bangalore, villa builders Bangalore, apartment construction Bangalore, trusted builders Karnataka, construction services Bangalore',
    h1: 'Atha Construction: Bangalore\'s Premier Construction Company Built on Excellence'
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
    title: 'Construction Services Bangalore | Turnkey Home Builders & Architects Karnataka',
    description: 'Complete construction services in Bangalore - Turnkey construction, home architecture, interior design, project management. Expert builders serving Whitefield, Electronic City, HSR Layout & all Bangalore areas.',
    keywords: 'construction services Bangalore, turnkey construction Bangalore, home architecture Bangalore, interior design Bangalore, construction contractors Bangalore, building services Karnataka, project management construction Bangalore',
    h1: 'Complete Construction Services in Bangalore - From Design to Handover'
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
    title: 'Construction Packages Bangalore | Affordable Home Building Plans Karnataka',
    description: 'Transparent construction packages & pricing in Bangalore. Custom home building plans with fixed costs, quality materials & timely delivery. Best value construction packages in Karnataka.',
    keywords: 'construction packages Bangalore, home construction cost Bangalore, construction pricing Karnataka, affordable home builders Bangalore, construction plans Bangalore, house construction packages Bangalore, villa construction cost Bangalore',
    h1: 'Transparent Construction Packages in Bangalore - Fixed Price, Premium Quality'
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
    title: 'Construction Projects Bangalore | Premium Villas & Homes Portfolio Karnataka',
    description: 'Explore our premium construction projects in Bangalore - luxury villas, modern homes & commercial buildings. View completed projects across Whitefield, HSR Layout, Electronic City & Karnataka.',
    keywords: 'construction projects Bangalore, villa construction Bangalore, luxury homes Bangalore, residential projects Karnataka, construction portfolio Bangalore, completed projects Bangalore, villa builders Bangalore, premium construction Bangalore',
    h1: 'Premium Construction Projects Across Bangalore - Excellence in Every Build'
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
    title: 'Construction Gallery Bangalore | Home Design & Building Photos Karnataka',
    description: 'Browse our construction gallery showcasing premium homes, villas & interiors in Bangalore. See innovative designs, quality craftsmanship & completed projects across Karnataka.',
    keywords: 'construction gallery Bangalore, home design photos Bangalore, villa gallery Bangalore, interior design gallery Bangalore, construction work photos Karnataka, building gallery Bangalore, architecture photos Bangalore',
    h1: 'Construction Gallery - Inspiring Homes & Designs Across Bangalore'
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
