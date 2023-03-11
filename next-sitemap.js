/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://michaelsebastian.my.id/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  sitemapSize: 10000,
}
