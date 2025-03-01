// next.config.js
module.exports = {
    output: 'export',
    images: {
      unoptimized: true, // Disable Next.js image optimization
    },
    experimental: {
      appDir: true,
    },
    output: "standalone", // Ensure it works on Vercel
    trailingSlash: true, // Optional: adds trailing slash to URLs
  };
  