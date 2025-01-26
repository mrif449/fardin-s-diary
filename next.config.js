/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static exports
    domains: ['localhost'], // Add your production domain here
  },
  // Enable static export for deployment
  output: 'export',
}

module.exports = nextConfig