# Atha Construction - TypeScript/Node.js Website

A modern TypeScript-based website for Atha Construction, converted from PHP to provide better type safety, maintainability, and performance.

## 🚀 Features

- **TypeScript**: Full type safety and better development experience
- **Express.js**: Fast and flexible Node.js web framework
- **Handlebars**: Powerful templating engine for server-side rendering
- **Security**: Helmet, CORS, rate limiting, and input validation
- **Email**: Nodemailer integration for contact forms
- **SEO Optimized**: Meta tags, structured data, and canonical URLs
- **Responsive**: Mobile-first Bootstrap design
- **Performance**: Compression, caching, and optimized assets

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd atha-construction-ts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration:
   - Email settings (SMTP)
   - Database settings (if needed)
   - Security keys
   - Firebase config (optional)

4. **Copy static assets**
   ```bash
   # Copy your existing assets folder to public/assets/
   mkdir -p public/assets
   cp -r path/to/your/assetes/* public/assets/
   ```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

### Watch Mode (Development)
```bash
npm run dev:watch
```

## 📁 Project Structure

```
src/
├── config/          # Configuration files
├── data/            # Static data (blog posts, etc.)
├── middleware/      # Express middleware
├── routes/          # Route handlers
├── services/        # Business logic services
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── views/           # Handlebars templates
│   ├── layouts/     # Layout templates
│   ├── partials/    # Partial templates
│   └── *.hbs        # Page templates
├── app.ts           # Express app configuration
└── server.ts        # Server entry point

public/
└── assets/          # Static files (CSS, JS, images)
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `3000` |
| `BASE_URL` | Base URL for the application | `http://localhost:3000` |
| `SMTP_HOST` | Email SMTP host | `smtp.gmail.com` |
| `SMTP_PORT` | Email SMTP port | `587` |
| `SMTP_USER` | Email username | - |
| `SMTP_PASS` | Email password/app password | - |
| `SESSION_SECRET` | Session secret key | - |

### Email Configuration

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `SMTP_PASS`

## 🔄 Migration from PHP

This TypeScript version provides equivalent functionality to the original PHP website:

### PHP → TypeScript Mappings

| PHP Feature | TypeScript Equivalent |
|-------------|----------------------|
| `include/require` | ES6 imports |
| `$_POST` handling | Express body parser + validation |
| `mail()` function | Nodemailer service |
| PHP sessions | Express sessions |
| `htmlspecialchars()` | Express-validator + sanitization |
| PHP arrays | TypeScript interfaces/types |

### Key Improvements

1. **Type Safety**: All data structures are typed
2. **Validation**: Comprehensive input validation with express-validator
3. **Security**: Modern security practices with helmet and rate limiting
4. **Performance**: Compression and caching
5. **Maintainability**: Modular structure and clean code

## 📝 API Endpoints

### Contact Form
- `POST /contact` - Main contact form
- `POST /contact/footer` - Footer contact form

### Career Form  
- `POST /careers` - Career application (with file upload)

### Pages
- `GET /` - Home page
- `GET /about` - About page
- `GET /services` - Services page
- `GET /packages` - Packages page
- `GET /properties` - Properties page
- `GET /careers` - Careers page
- `GET /contact` - Contact page
- `GET /blogs` - Blog listing
- `GET /blog/:slug` - Individual blog post
- `GET /gallery` - Gallery page

## 🔒 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Prevent abuse
- **Input Validation**: Server-side validation
- **Sanitization**: HTML/script injection prevention
- **Session Security**: Secure session configuration

## 📧 Email Templates

Email templates are generated dynamically with:
- Contact form submissions
- Career applications
- Responsive HTML design
- Company branding

## 🎨 Frontend Integration

The application serves static assets and uses:
- Bootstrap 5 for responsive design
- jQuery for interactions
- Font Awesome for icons
- Owl Carousel for sliders
- Custom CSS from original design

## 🧪 Testing

```bash
npm test
```

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### PM2 Deployment (Recommended)
```bash
npm install -g pm2
pm2 start dist/server.js --name "atha-construction"
pm2 startup
pm2 save
```

## 🔍 Monitoring

- Health check endpoint: `GET /health`
- Logs are stored in `logs/` directory
- Winston logger for structured logging

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**
   - Check SMTP credentials
   - Verify Gmail app password
   - Check firewall/network settings

2. **Assets not loading**
   - Ensure assets are in `public/assets/`
   - Check file permissions
   - Verify BASE_URL configuration

3. **Port already in use**
   - Change PORT in `.env`
   - Kill existing process: `pkill -f node`

## 📄 License

This project is proprietary to Atha Construction.

## 🤝 Support

For support and questions, contact the development team or refer to the documentation.

---

**Note**: This TypeScript version maintains full compatibility with the original PHP functionality while providing modern development practices and better maintainability.
