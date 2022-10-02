/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/gh-pages-test',
    experimental:{
      images:{
        unoptimized:true,
      }
    }
  }
  
  module.exports = nextConfig