/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://rh-mr.com', // Replace with your site URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    sitemapSize: 5000, 
    changefreq: 'daily', // (optional) Change frequency of the URLs
    priority: 0.7, // (optional) Priority of the URLs
    exclude: ['/admin/*'], // (optional) Exclude specific paths
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://rh-mr.com/ar',
        'https://rh-mr.com/en',
      ],
    },
  };