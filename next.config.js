/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  redirects() {
    return [
      {
        source: "/explore",
        destination: "/explore/all",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
