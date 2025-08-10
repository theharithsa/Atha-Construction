import { Router, Request, Response } from 'express';
import { blogPosts, getPostBySlug, getRecentPosts } from '../data/blogData';
import { PageMeta } from '../types';
import { generateCanonicalUrl, getCurrentPageName, createExcerpt } from '../utils/helpers';
import { config } from '../config';

const router = Router();

/**
 * Blog listing page
 */
router.get('/', (req: Request, res: Response) => {
  const meta: PageMeta = {
    title: 'Blogs | Home Construction Company in Bangalore | Atha construction',
    description: 'Get more information about the Home Construction Company in Bangalore with Atha construction. For details about our projects and services, visit our blog page today!',
    keywords: 'Home Construction In Bangalore, Home automation in Bangalore, Home Construction Company in Bangalore',
    h1: 'Latest News and Insights'
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(
    req.protocol,
    req.get('host') || '',
    req.originalUrl
  );

  // Add excerpts to blog posts for listing
  const postsWithExcerpts = blogPosts.map(post => ({
    ...post,
    excerpt: createExcerpt(post.content, 200)
  }));

  const recentPosts = getRecentPosts(3);

  res.render('blogs', {
    meta,
    blogPosts: postsWithExcerpts,
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
 * Individual blog post page
 */
router.get('/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  const post = getPostBySlug(slug);

  if (!post) {
    return res.redirect('/');
  }

  const meta: PageMeta = {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    h1: post.h1
  };

  const currentPage = getCurrentPageName(req.path);
  const canonicalUrl = generateCanonicalUrl(
    req.protocol,
    req.get('host') || '',
    req.originalUrl
  );

  // Generate structured data for blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `${config.baseUrl}/${post.image}`,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Atha Construction",
      "logo": {
        "@type": "ImageObject",
        "url": `${config.baseUrl}/assets/images/logo.png`
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  const recentPosts = getRecentPosts(3);

  res.render('blog-detail', {
    meta,
    post,
    currentPage,
    canonicalUrl,
    structuredData: JSON.stringify(structuredData),
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
