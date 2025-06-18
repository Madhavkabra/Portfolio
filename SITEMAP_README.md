# Sitemap Generation

This project includes automatic sitemap generation for better SEO. The sitemap includes all static routes and dynamically fetches blog URLs from the Strapi CMS.

## Features

- **Static Routes**: All main pages (Home, About, Experience, Projects, Blogs, Consultation, Resume)
- **Dynamic Blog URLs**: Automatically fetches published blog posts from Strapi
- **SEO Optimized**: Includes proper priorities, change frequencies, and last modified dates
- **Multiple Access Points**: Available both as a React route and static file

## Access Points

1. **React Route**: `https://mady.techsavvyfit.com/sitemap.xml`
2. **Static File**: `https://mady.techsavvyfit.com/sitemap.xml` (generated in public folder)

## Usage

### Generate Sitemap Manually
```bash
npm run generate-sitemap
```

### Build with Sitemap (Automatic)
```bash
npm run build
```
The sitemap is automatically generated before each build.

### Development
```bash
npm run dev
```
Access the dynamic sitemap at `http://localhost:3000/sitemap.xml`

## Configuration

### Environment Variables
Make sure these environment variables are set for blog data fetching:
- `REACT_APP_STRAPI_API_KEY`: Your Strapi API key
- `REACT_APP_STRAPI_API_URL`: Your Strapi API URL

### Base URL
The sitemap uses `https://mady.techsavvyfit.com` as the base URL. To change this, update the `baseUrl` variable in:
- `src/components/Sitemap.js`
- `scripts/generate-sitemap.js`

## Sitemap Structure

The generated sitemap includes:

### Static Routes
- `/` - Home (Priority: 1.0, Change: Daily)
- `/about` - About (Priority: 0.8, Change: Weekly)
- `/experience` - Experience (Priority: 0.8, Change: Weekly)
- `/project` - Projects (Priority: 0.8, Change: Weekly)
- `/blogs` - Blog List (Priority: 0.9, Change: Daily)
- `/consultation` - Consultation (Priority: 0.7, Change: Monthly)
- `/resume` - Resume (Priority: 0.6, Change: Monthly)

### Blog Routes
- `/blogs/{slug}` - Individual blog posts (Priority: 0.7, Change: Monthly)
- Automatically fetched from Strapi CMS
- Only includes published blogs
- Uses actual publish/update dates

## SEO Benefits

1. **Search Engine Discovery**: Helps search engines find all your pages
2. **Blog Indexing**: Ensures all blog posts are discoverable
3. **Update Notifications**: Last modified dates help search engines know when content changes
4. **Priority Guidance**: Helps search engines understand page importance
5. **Change Frequency**: Provides crawling guidance to search engines

## Files Created/Modified

- `src/components/Sitemap.js` - React component for dynamic sitemap
- `scripts/generate-sitemap.js` - Node.js script for static sitemap generation
- `src/routes/router.js` - Added sitemap route
- `public/robots.txt` - Added sitemap reference
- `package.json` - Added generate-sitemap script and updated build script

## Troubleshooting

### No Blog Data
If the sitemap doesn't include blog data:
1. Check that `REACT_APP_STRAPI_API_KEY` and `REACT_APP_STRAPI_API_URL` are set
2. Ensure your Strapi backend is running
3. Verify that blogs are published in Strapi

### Build Errors
If the build fails due to sitemap generation:
1. Check that the `scripts` directory exists
2. Verify Node.js has file write permissions
3. Ensure environment variables are properly set

### Access Issues
If `/sitemap.xml` is not accessible:
1. Check that the route is properly added to the router
2. Verify the build process completed successfully
3. Check server configuration for XML content type handling 