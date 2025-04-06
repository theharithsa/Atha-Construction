const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Home | Atha Construction' });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us | Atha Construction' });
});

// Services
router.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services | Atha Construction' });
});

// Properties
router.get('/properties', (req, res) => {
  res.render('properties', { title: 'Properties | Atha Construction' });
});

// Packages
router.get('/packages', (req, res) => {
  res.render('packages', { title: 'Packages | Atha Construction' });
});

// Blogs
router.get('/blogs', (req, res) => {
  res.render('blogs', { title: 'Blogs | Atha Construction' });
});

// Careers
router.get('/careers', (req, res) => {
  res.render('careers', { title: 'Careers | Atha Construction' });
});

// Contact
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact | Atha Construction' });
});

// Gallery
router.get('/gallery', (req, res) => {
  res.render('gallery', { title: 'Gallery | Atha Construction' });
});

// Blog detail page (dynamic slug)
router.get('/blog/:slug', (req, res) => {
  const slug = req.params.slug;
  res.render('blog-detail', { title: `Blog - ${slug}`, slug });
});

module.exports = router;
