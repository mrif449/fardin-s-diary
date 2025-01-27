/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static exports
    domains: ['localhost'], // Add your production domain here
  },
  output: 'export', // Enable static export for deployment
  experimental: {
    profiling: false, // Disable trace file generation
  },
};

module.exports = nextConfig;