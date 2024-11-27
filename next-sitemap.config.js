const servicesData = require('./src/lib/sitemapUtils');
const axios = require('axios');

// Create axios instance
const axiosInstance = axios.create({
  baseURL:
    process.env.API_URL ||
    'https://pgyuqtbyfn.us-east-1.awsapprunner.com/api/v1',
});
//
// Blog service functions
const blogService = {
  getBlogs: async ({ limit = 9, page = 1, search = '', category }) => {
    const params = new URLSearchParams({
      limit: String(limit),
      page: String(page),
    });

    if (search) params.append('search', search);
    if (category && category !== 'all') params.append('category', category);

    try {
      const { data: response } = await axiosInstance.get(`/blogs?${params}`);
      return {
        data: response.data || [],
        categories: response.categories || [],
        totalPages: response.totalPages || 1,
        hasNextPage: page < (response.totalPages || 1),
      };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw new Error(error.message || 'Failed to fetch blogs');
    }
  },
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.globalinnovations.co.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    // Custom priority and changefreq for service pages
    if (path.includes('/services/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Custom priority and changefreq for blog pages
    if (path.includes('/blog/')) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Default values for other pages
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async config => {
    // Get all service routes
    const serviceRoutes = servicesData.map(service => ({
      loc: `/services/${service.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    // Fetch all blogs
    let blogRoutes = [];
    try {
      // Fetch all blogs (using a large limit to get all blogs)
      const { data: blogs } = await blogService.getBlogs({
        limit: 1000,
        page: 1,
      });

      // Create blog routes
      blogRoutes = blogs.map(blog => ({
        loc: `/blog/${blog.slug}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: blog.updatedAt || new Date().toISOString(),
      }));
    } catch (error) {
      console.error('Error fetching blogs for sitemap:', error);
    }

    // Combine both service and blog routes
    return [...serviceRoutes, ...blogRoutes];
  },
};
