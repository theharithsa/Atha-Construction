// Sitemap Verification Script for Atha Construction
// Run this in browser console to verify sitemap accessibility and structure

console.log('🔍 Sitemap Verification for Atha Construction');
console.log('===========================================');

// Function to check sitemap accessibility
async function verifySitemap() {
  const sitemapUrl = 'https://athaconstruction.in/sitemap.xml';
  
  try {
    // Check if sitemap is accessible
    const response = await fetch(sitemapUrl);
    
    if (response.ok) {
      console.log('✅ Sitemap is accessible at:', sitemapUrl);
      
      const sitemapContent = await response.text();
      
      // Parse XML and count URLs
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(sitemapContent, 'text/xml');
      const urls = xmlDoc.querySelectorAll('url');
      
      console.log(`📊 Total URLs in sitemap: ${urls.length}`);
      
      // Group by priority
      const priorityGroups = {};
      urls.forEach(url => {
        const priority = url.querySelector('priority')?.textContent || '0.50';
        if (!priorityGroups[priority]) priorityGroups[priority] = [];
        priorityGroups[priority].push(url.querySelector('loc')?.textContent);
      });
      
      console.log('📈 Priority Distribution:');
      Object.keys(priorityGroups)
        .sort((a, b) => parseFloat(b) - parseFloat(a))
        .forEach(priority => {
          console.log(`  Priority ${priority}: ${priorityGroups[priority].length} pages`);
        });
      
      // Check for images
      const images = xmlDoc.querySelectorAll('image\\:image, image');
      console.log(`🖼️  Images in sitemap: ${images.length}`);
      
      // Check last modified dates
      const lastMods = Array.from(xmlDoc.querySelectorAll('lastmod')).map(el => el.textContent);
      const uniqueDates = [...new Set(lastMods)];
      console.log(`📅 Last modified dates: ${uniqueDates.join(', ')}`);
      
    } else {
      console.error('❌ Sitemap not accessible:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Error fetching sitemap:', error);
  }
}

// Function to validate robots.txt
async function verifyRobots() {
  const robotsUrl = 'https://athaconstruction.in/robots.txt';
  
  try {
    const response = await fetch(robotsUrl);
    
    if (response.ok) {
      console.log('✅ Robots.txt is accessible at:', robotsUrl);
      const robotsContent = await response.text();
      
      // Check for sitemap reference
      if (robotsContent.includes('sitemap.xml')) {
        console.log('✅ Sitemap reference found in robots.txt');
      } else {
        console.log('⚠️  Sitemap reference not found in robots.txt');
      }
      
      console.log('📄 Robots.txt content preview:');
      console.log(robotsContent.split('\n').slice(0, 10).join('\n'));
      
    } else {
      console.error('❌ Robots.txt not accessible:', response.status);
    }
  } catch (error) {
    console.error('❌ Error fetching robots.txt:', error);
  }
}

// Function to test key page accessibility
async function verifyKeyPages() {
  const keyPages = [
    'https://athaconstruction.in/',
    'https://athaconstruction.in/about',
    'https://athaconstruction.in/services',
    'https://athaconstruction.in/contact',
    'https://athaconstruction.in/blog/home-construction-company-in-bangalore'
  ];
  
  console.log('🔗 Testing key page accessibility...');
  
  for (const page of keyPages) {
    try {
      const response = await fetch(page, { method: 'HEAD' });
      const status = response.status;
      
      if (status === 200) {
        console.log(`✅ ${page} - OK (${status})`);
      } else if (status >= 300 && status < 400) {
        console.log(`🔄 ${page} - Redirect (${status})`);
      } else {
        console.log(`❌ ${page} - Error (${status})`);
      }
    } catch (error) {
      console.log(`❌ ${page} - Network Error`);
    }
    
    // Add small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Function to check meta tags on current page
function verifyMetaTags() {
  console.log('🏷️  Current Page Meta Tags:');
  
  const title = document.title;
  const description = document.querySelector('meta[name="description"]')?.content;
  const keywords = document.querySelector('meta[name="keywords"]')?.content;
  const canonical = document.querySelector('link[rel="canonical"]')?.href;
  
  console.log(`Title: ${title}`);
  console.log(`Description: ${description}`);
  console.log(`Keywords: ${keywords}`);
  console.log(`Canonical: ${canonical}`);
  
  // Check title length
  if (title.length > 60) {
    console.warn('⚠️  Title is longer than 60 characters (might be truncated in search results)');
  }
  
  // Check description length
  if (description && description.length > 160) {
    console.warn('⚠️  Description is longer than 160 characters (might be truncated)');
  }
  
  // Check for Bangalore keywords
  const content = (title + ' ' + description + ' ' + keywords).toLowerCase();
  const bangaloreKeywords = ['bangalore', 'bengaluru', 'karnataka', 'construction', 'builders'];
  const foundKeywords = bangaloreKeywords.filter(keyword => content.includes(keyword));
  
  console.log(`🎯 Bangalore-focused keywords found: ${foundKeywords.join(', ')}`);
}

// Function to check Google Tag Manager
function verifyGTM() {
  console.log('📊 Google Tag Manager Verification:');
  
  if (window.dataLayer) {
    console.log('✅ DataLayer is present');
    console.log('DataLayer events:', window.dataLayer.length);
  } else {
    console.log('❌ DataLayer not found');
  }
  
  // Check GTM script
  const gtmScripts = document.querySelectorAll('script[src*="googletagmanager"]');
  if (gtmScripts.length > 0) {
    console.log(`✅ GTM script found (${gtmScripts.length} instances)`);
    gtmScripts.forEach(script => {
      const match = script.src.match(/id=([^&]+)/);
      if (match) {
        console.log(`GTM ID: ${match[1]}`);
      }
    });
  } else {
    console.log('❌ GTM script not found');
  }
}

// Run all verifications
async function runAllVerifications() {
  console.log('🚀 Starting comprehensive sitemap and SEO verification...\n');
  
  await verifySitemap();
  console.log('\n');
  
  await verifyRobots();
  console.log('\n');
  
  await verifyKeyPages();
  console.log('\n');
  
  verifyMetaTags();
  console.log('\n');
  
  verifyGTM();
  console.log('\n');
  
  console.log('✅ Verification complete! Check results above.');
  console.log('📝 Next steps:');
  console.log('1. Submit sitemap to Google Search Console');
  console.log('2. Submit sitemap to Bing Webmaster Tools');
  console.log('3. Monitor indexing status');
  console.log('4. Track keyword rankings for Bangalore construction terms');
}

// Auto-run if in browser, or provide manual trigger
if (typeof window !== 'undefined') {
  runAllVerifications();
} else {
  console.log('Run runAllVerifications() to start the verification process');
}
