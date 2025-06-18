const fs = require('fs');
const path = require('path');

// Simple environment detection
const isDevelopment = process.env.NODE_ENV === 'development';
const envFile = isDevelopment ? '.env.local' : '.env';

require('dotenv').config({ path: path.join(__dirname, '..', envFile) });

console.log(`Environment: ${isDevelopment ? 'Development' : 'Production'}`);
console.log(`Loading from: ${envFile}`);

const generateSitemap = async () => {
    const baseUrl = 'https://mady.techsavvyfit.com';
    const currentDate = new Date().toISOString();

    // Static routes from your router
    const staticRoutes = [
        { path: '/', priority: '1.0', changefreq: 'daily' },
        { path: '/about', priority: '0.8', changefreq: 'weekly' },
        { path: '/experience', priority: '0.8', changefreq: 'weekly' },
        { path: '/project', priority: '0.8', changefreq: 'weekly' },
        { path: '/blogs', priority: '0.9', changefreq: 'daily' },
        { path: '/consultation', priority: '0.7', changefreq: 'monthly' },
        { path: '/resume', priority: '0.6', changefreq: 'monthly' },
    ];

    // Fetch blog data from Strapi
    let blogRoutes = [];
    try {
        const apiKey = process.env.REACT_APP_STRAPI_API_KEY;
        const apiUrl = process.env.REACT_APP_STRAPI_API_URL;

        if (apiKey && apiUrl) {
            console.log('Fetching blog data from Strapi...');
            const ipv4ApiUrl = apiUrl.replace('localhost', '127.0.0.1');
            const response = await fetch(
                `${ipv4ApiUrl}?pagination[page]=1&pagination[pageSize]=1000&sort=publishDate:desc&fields=slug,publishDate,updatedAt,isPublished`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            if (data.data) {
                blogRoutes = data.data
                    .filter(blog => blog.isPublished)
                    .map(blog => ({
                        path: `/blogs/${blog.slug}`,
                        priority: '0.7',
                        changefreq: 'monthly',
                        lastmod: blog.updatedAt || blog.publishDate
                    }));
                console.log(`Found ${blogRoutes.length} published blogs`);
            }
        } else {
            console.log('API credentials not found, skipping blog data');
            console.log('Required env vars: REACT_APP_STRAPI_API_KEY, REACT_APP_STRAPI_BASE_URL');
        }
    } catch (error) {
        console.error('Error fetching blog data for sitemap:', error);
    }

    // Generate XML content
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static routes
    staticRoutes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
        xml += `    <lastmod>${currentDate}</lastmod>\n`;
        xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
        xml += `    <priority>${route.priority}</priority>\n`;
        xml += '  </url>\n';
    });

    // Add blog routes
    blogRoutes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
        xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
        xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
        xml += `    <priority>${route.priority}</priority>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    // Write to public folder
    const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    fs.writeFileSync(publicPath, xml);

    console.log(`Sitemap generated successfully at: ${publicPath}`);
    console.log(`Total URLs: ${staticRoutes.length + blogRoutes.length}`);
    console.log(`- Static routes: ${staticRoutes.length}`);
    console.log(`- Blog routes: ${blogRoutes.length}`);
};

// Run the script
generateSitemap().catch(console.error); 