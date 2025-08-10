import { Router, Request, Response } from 'express';
import { PageMeta } from '../types';
import { getRecentPosts } from '../data/blogData';
import { generateCanonicalUrl, getCurrentPageName } from '../utils/helpers';
import { config } from '../config';

const router = Router();

/**
 * Home page route
 */
router.get('/', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Best Construction Company In Bangalore | Atha construction',
    description: 'Explore Atha Construction, the best construction company in Bangalore. Expert builders delivering quality, innovation, and excellence in every project. Visit us',
    keywords: 'Construction Companies In Bangalore, Best Construction Company In Bangalore, residential construction companies in bangalore',
    h1: 'Construction Company In Bangalore Crafting Dreams, Building Legacies'
  };

  const recentPosts = getRecentPosts(3);
  const currentPage = getCurrentPageName(req.path);
  
  const canonicalUrl = generateCanonicalUrl(
    req.protocol,
    req.get('host') || '',
    req.originalUrl
  );

  res.render('home', {
    meta,
    recentPosts,
    currentPage,
    canonicalUrl,
    baseUrl: config.baseUrl,
    analytics: config.analytics,
    // Footer conditional sections
    showTestimonials: true,
    showBlogs: true,
    showWorkWithUs: true,
    showFAQ: true,
    recentBlogPosts: recentPosts,
    layout: 'main'
  });
});

export default router;
