/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: ""
          },
        ],
      },
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "12D16C923BA17672F89B18C1DB22A",
        NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
    },
};

export default nextConfig;
