// Core types for the application

export interface BlogPost {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  title: string;
  content: string;
  image: string;
  alt: string;
  date: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  type: 'residential' | 'commercial';
  plotsize: string;
  message?: string;
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  post: string;
  experience: string;
  message?: string;
  resume?: Express.Multer.File;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  h1: string;
}

export interface FirebaseProject {
  title: string;
  locations: string;
  feets: string;
  land1: string;
  land2: string;
  des: string;
  img_url: string;
  price?: string;
}

export interface ServiceData {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  structuredData?: object;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string;
}

// Express Request extension for form data
declare global {
  namespace Express {
    interface Request {
      seo?: SEOData;
    }
  }
}

export interface APIResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}
