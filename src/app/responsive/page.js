import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });
export default function ResponsivePage() {
  console.log("Halaman ini dipublis oleh", process.env.NEXT_PUBLIC_BLOG_WRITER);
  return (
    <div className={roboto.className}>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Selamat Datang di Halaman Responsif
        </h1>
        <div className="md:flex md:justify-between md:space-x-4">
          <div className="md:w-1/2 md:p-4 bg-white rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold text-black-500 mb-2">
              Blog Saya
            </h2>
            <p className="text-gray-700">
              Ini adalah konten yang pertama kali dipublikasikan.
            </p>
          </div>
          <div className="md:w-1/2 md:p-4 bg-white rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold text-black-500 mb-2">
              Blog terakhir
            </h2>
            <p className="text-gray-700">
              Ini adalah konten yang terakhir dipublikasikan.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
