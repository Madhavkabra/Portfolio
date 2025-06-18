import React, { useEffect, useState } from 'react';

const Sitemap = () => {
    const [sitemapContent, setSitemapContent] = useState('');

    useEffect(() => {
        const generateSitemap = async () => {
            // Determine if we're in development or production
            const isLocalhost = process.env.NODE_ENV === 'development' ||
                window.location.hostname === 'localhost' ||
                window.location.hostname === '127.0.0.1';

            const baseUrl = isLocalhost ? 'http://localhost:3000' : 'https://mady.techsavvyfit.com';
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
                const strapiBaseUrl = process.env.REACT_APP_STRAPI_BASE_URL;
                const apiUrl = `${strapiBaseUrl}/api/blogs`;

                if (apiKey && strapiBaseUrl) {
                    const response = await fetch(
                        `${apiUrl}?pagination[page]=1&pagination[pageSize]=1000&sort=publishDate:desc&fields=slug,publishDate,updatedAt,isPublished`,
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
                    }
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

            setSitemapContent(xml);
        };

        generateSitemap();
    }, []);

    // Set content type to XML
    useEffect(() => {
        if (sitemapContent) {
            document.title = 'Sitemap';
        }
    }, [sitemapContent]);

    // Return XML content
    return (
        <pre style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            fontFamily: 'monospace',
            fontSize: '12px',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            margin: 0
        }}>
            {sitemapContent || 'Generating sitemap...'}
        </pre>
    );
};

export default Sitemap; 