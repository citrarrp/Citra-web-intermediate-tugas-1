/** @type {import('next').NextConfig} */
const nextConfig = {};

const allowedDomains = ["upload.wikimedia.org"];

module.exports = {
  onDemandEntries: {
    maxInactiveAge: 60 * 1000, // Cache halaman selama 60 detik
    pagesBufferLength: 10, // Cache maksimal 10 halaman
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60", // Cache aset statis selama 1 menit
          },
        ],
      },
    ];
  },
  images: {
    domains: allowedDomains,
    formats: ["image/avif", "image/webp"],
  },
};
