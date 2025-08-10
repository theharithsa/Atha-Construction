import slugify from 'slugify';

/**
 * Generate a URL-friendly slug from a title
 */
export const generateSlug = (title: string): string => {
  return slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g
  });
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!email) return false;
  const cleanEmail = email.replace(regex, '');
  return cleanEmail === '';
};

/**
 * Validate mobile number (10 digits)
 */
export const validateMobile = (phone: string): boolean => {
  return /^[0-9]{10}$/.test(phone);
};

/**
 * Sanitize input string
 */
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

/**
 * Get current page name from request path
 */
export const getCurrentPageName = (path: string): string => {
  const cleanPath = path.replace(/\/$/, '') || '/';
  return cleanPath === '/' ? 'home' : cleanPath.substring(1);
};

/**
 * Generate canonical URL
 */
export const generateCanonicalUrl = (protocol: string, hostname: string, path: string): string => {
  return `${protocol}//${hostname}${path}`;
};

/**
 * Create SEO-friendly excerpt from content
 */
export const createExcerpt = (content: string, length: number = 200): string => {
  const textContent = content.replace(/<[^>]*>/g, ''); // Strip HTML
  return textContent.length > length 
    ? textContent.substring(0, length) + '...'
    : textContent;
};

/**
 * Format date for display
 */
export const formatDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Check if string contains prohibited content
 */
export const hasProhibitedContent = (text: string): boolean => {
  const prohibitedPatterns = [
    /https?:\/\//i,
    /<[^>]+>/,
    /[<>'"]/
  ];
  
  return prohibitedPatterns.some(pattern => pattern.test(text));
};

/**
 * Escape HTML characters
 */
export const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

/**
 * Check if request is from mobile device
 */
export const isMobileDevice = (userAgent: string): boolean => {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};

/**
 * Generate random string for session secrets
 */
export const generateRandomString = (length: number = 32): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
