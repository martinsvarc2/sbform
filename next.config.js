/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // This is needed for the tutorial images
  },
}

module.exports = nextConfig
