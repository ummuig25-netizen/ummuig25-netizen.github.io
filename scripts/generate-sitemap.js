const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://ummuig25-netizen.github.io';
const pages = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/projects/', changefreq: 'weekly', priority: 0.8 },
    { url: '/cv/', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact/', changefreq: 'monthly', priority: 0.5 }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
