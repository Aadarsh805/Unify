/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["nxlkzsdcwscprmiqcqiu.supabase.co"],
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
};;

module.exports = nextConfig;
