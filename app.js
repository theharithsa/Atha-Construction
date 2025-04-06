const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/services', (req, res) => res.render('services'));
app.get('/packages', (req, res) => res.render('packages'));
app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/careers', (req, res) => res.render('careers'));
app.get('/blogs', (req, res) => res.render('blogs'));
app.get('/blog/:slug', (req, res) => res.render('blog-detail', { slug: req.params.slug }));
app.get('/properties', (req, res) => res.render('properties'));
app.get('/contact', (req, res) => res.render('contact'));

// 404 fallback
app.use((req, res) => res.status(404).render('404'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
