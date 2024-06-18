/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mnger-prod.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/webapp-public/**",
      },
    ]
  }
};

export default nextConfig;
