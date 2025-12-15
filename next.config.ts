import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* * Vercel tidak butuh 'output: export', 'basePath', atau 'unoptimized'.
   * Biarkan Vercel yang mengurus semuanya secara otomatis.
   */
  
  eslint: {
    // Biar kalau ada error kodingan kecil, deploy tetap jalan
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;