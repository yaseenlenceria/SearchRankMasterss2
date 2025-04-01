# LumeWeb Studios Website

This is a React-based business website for LumeWeb Studios, a Los Angeles-based web development and digital marketing agency.

## Netlify Deployment Guide

This project is configured for easy deployment to Netlify. Follow these steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Netlify account at https://app.netlify.com
3. Click "New site from Git"
4. Select your Git provider and authorize Netlify
5. Choose the repository with your website code
6. In the build settings, leave the defaults as configured in netlify.toml:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

## Custom Domain Setup

To connect your custom domain (lumewebstudios.com):

1. From your Netlify dashboard, select your site
2. Go to "Domain management" or "Domain settings"
3. Click "Add custom domain"
4. Enter your domain name (lumewebstudios.com)
5. Follow the instructions to configure your DNS settings at your domain registrar
6. Netlify automatically provisions an SSL certificate for your domain

## Google Search Console Verification

This site includes Google Search Console verification:

1. Meta tag verification in the HTML head
2. Verification file located at `/google-site-verification=tm1napbiz2ono2gae7n7fs0izwt40ioanejnsti8z7a.txt`

## SEO Features

- Comprehensive sitemap.xml with all site pages
- robots.txt configured for optimal indexing
- Schema.org structured data for local business information
- Proper page titles and meta descriptions for all pages

## Development

To run locally:
```bash
npm run dev
```

## Building for Production

To create a production build:
```bash
npm run build
```