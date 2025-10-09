import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
      images: {
    domains: [
      "res.cloudinary.com",
      "public/images", // add this line
    ],
  },
};

export default nextConfig;
