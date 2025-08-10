import { BlogPost } from '../types';
import { generateSlug } from '../utils/helpers';

export const blogPosts: BlogPost[] = [
  {
    slug: generateSlug('home-construction-company-in-bangalore'),
    metaTitle: 'Home Construction Company in Bangalore | Atha Construction',
    metaDescription: 'Atha Construction, a trusted Home Construction Company in Bangalore, can help you build the house of your dreams. Excellence, and quality in each project!',
    keywords: 'Home Construction Company in Bangalore, Home Construction In Bangalore, Home Construction contractors In Bangalore, Home Construction contractors In Bangalore, house construction in bangalore, best house construction companies in bangalore, Home Construction Services in Bangalore',
    h1: 'Your Guide to Building the Dream Home with Home Construction Company in Bangalore',
    title: 'Your Guide to Building the Dream Home with Home Construction Company in Bangalore',
    content: `<p>A home is considered a significant milestone in life. It is regarded as an opportunity for most to have a place that expresses personality, needs, and aspirations. However, this dream home looks daunting when finding the right home construction company in Bangalore. With years of experience and expertise in the industry, Atha Construction commits itself to bringing your vision to reality. We will take you through the process of home construction and explain why Atha Construction should be the very first choice for house construction in Bangalore.</p>
    
    <h2>Introduction to Atha Construction</h2>
    <p>Atha Construction's portfolio boasts an impressive array of residential projects, ranging from affordable houses to luxury villas, successfully delivered with precision. Our team of architects, engineers, and designers works with you to build your home exactly the way you want it while complying with all the latest construction requirements.</p>
    
    <h2>The Home Construction Process</h2>
    <p>Home building is a multiple-step process; knowing the home building process ensures that you know what to expect. Atha Construction has a simplified and easier-to-understand home construction process:</p>
    
    <ol>
      <li>Initial Consultation and Design Planning: The first step is to discuss your vision, preferences, and budget with our team. Our Architecture Design Services in Bangalore collaborate with you to create a customized plan that ensures the design aligns with your style and functional needs.</li>
      <li>Obtaining Approvals and Permits: This encompasses obtaining all permissions and approvals of the local government in Bangalore at the initial level before the commencement of actual construction.</li>
      <li>Site preparation and foundation: This is after permits are in place. Our team prepares the site to ensure the ground is leveled and cleared before laying the foundation, which will be crucial to the stability and longevity of the house.</li>
      <li>Structural Work and Construction: After laying the foundation, we start the construction of walls, roofs, and other structural elements. We use quality materials and skilled labor to ensure that every aspect of the house is built to last.</li>
      <li>Finishing and Interior Design: After the structural work, the finishing touches are completed. This section includes flooring, painting, tiling, electrical work, plumbing, and more interior work.</li>
      <li>Final Inspection and Handover: Before handing over the keys, we perform a final inspection to ensure that everything is in place and working.</li>
    </ol>`,
    image: 'assets/images/home-construction-company-in-bangalore.webp',
    alt: 'home-construction-company-in-bangalore',
    date: 'February 13, 2025',
    author: 'Atha Construction'
  },
  {
    slug: generateSlug('pre-construction-planning-guide'),
    metaTitle: 'Pre-Construction Guide | Best Construction Companies in Bangalore',
    metaDescription: 'Learn key pre-construction tactics for a smooth project development process. For efficiency & quality, collaborate with Best Construction Companies in Bangalore',
    keywords: 'Best Construction Companies in Bangalore, Home designers In Mysore, Best Construction Company In Bangalore, Innovative designers in Bangalore, Architecture Design Services in Bangalore, Best Interior Design in Bangalore',
    h1: 'Pre-construction Planning Guide to Choose Best Construction Companies in Bangalore',
    title: 'Pre-construction Planning Guide to Choose Best Construction Companies in Bangalore',
    content: `<p>In India, pre-construction planning is essential to the success of real estate developments. Risk reduction and project execution optimization depend on elements including infrastructure planning, financial management, environmental compliance, and site selection. Costly delays can be avoided with careful site selection, zoning compliance, and early utility study.</p>
    
    <h2>Site Selection and Evaluation</h2>
    <p>India's diverse geography and urban dynamics make site selection a crucial factor in property development. Urban locations like Delhi-NCR, Bengaluru, and Mumbai offer high potential for residential and commercial projects, while Tier-2 cities like Indore, Surat, and Coimbatore are emerging as lucrative markets for affordable housing and industrial setups.</p>
    
    <h2>Environmental Impact Assessment and Permits</h2>
    <p>Government incentives like the NGT increasingly enforce stricter guidelines that raise environmental sustainability concerns in Indian construction. EIA studies are highly done to evaluate the risks of ecological disturbances with project activities.</p>`,
    image: 'assets/images/blog1.jpg',
    alt: 'Pre-Construction Guide',
    date: 'January 30, 2025',
    author: 'Atha Construction'
  },
  {
    slug: generateSlug('construction-companies-in-bangalore'),
    metaTitle: 'Why Prefer Construction Companies In Bangalore',
    metaDescription: 'Find out why selecting Construction Companies In Bangalore over individual contractors guarantees quality, efficiency, and expertise at Atha Construction.',
    keywords: 'Best Construction Companies in Bangalore, Construction Companies In Bangalore, Building Contractors in Bangalore, Construction Company In Ballari',
    h1: 'Why Prefer Construction Companies In Bangalore over Individual Contractors?',
    title: 'Why Prefer Construction Companies In Bangalore over Individual Contractors?',
    content: `<p>The Indian construction industry represents one of the most significant contributors to the nation's economy, accounting for over 8% of the country's GDP (Gross Domestic Product) and is projected to experience a compound annual growth rate (CAGR) of 8.1% from 2023 to 2028.</p>
    
    <h2>Professionalism in Construction Companies</h2>
    <p>A primary distinguishing factor between construction firms and independent contractors is the degree of professionalism they offer. Construction Companies In Bangalore are organized entities with specialized teams, which ensures that each phase of a project is managed by qualified professionals.</p>`,
    image: 'assets/images/blog2.jpg',
    alt: 'Best Construction Company In Bangalore',
    date: 'January 20, 2025',
    author: 'Atha Construction'
  }
];

// Helper function to get recent posts
export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
