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
    title: 'Top Construction Company in Bangalore | Premium Home Builders Karnataka',
    description: 'Leading construction company in Bangalore specializing in residential & commercial projects. Expert home builders offering turnkey construction services across Karnataka including Whitefield, Electronic City & HSR Layout.',
    keywords: 'construction company Bangalore, best builders Bangalore, home construction Bangalore, residential construction companies Bangalore, construction services Karnataka, builders near me Bangalore, villa construction Bangalore, apartment construction Bangalore, construction company Whitefield, builders Electronic City, construction HSR Layout',
    h1: 'Premier Construction Company in Bangalore - Building Dreams Across Karnataka'
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
