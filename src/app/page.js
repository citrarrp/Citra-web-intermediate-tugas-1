"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import lukis from "@/img/senirupa.jpg";
import Tag from "@/app/tag";
import NormalCSS from "@/app/components/normalCSS";
import CSSModule from "@/app/components/moduleCSS";
import CSSTailwind from "@/app/components/TailwindCSS";
import CustomButton from "./components/customStyle.js";

export default function Home() {
  const [blogName, setBlogName] = useState("");
  console.log("Welcome to ", process.env.NEXT_PUBLIC_BLOG_NAME);
  const blogname = process.env.NEXT_PUBLIC_BLOG_NAME;
  return (
    <main className="flex flex-col  justify-between">
      {/* <h1>{blogname}</h1> */}
      <h3>Mengenali Berbagai Aliran Karya Seni Rupa</h3>
      <div className="mx-10 grid grid-cols-1 gap-8 mt-8 text-center lg:grid-cols-3">
        <Card
          title="Naturalisme"
          description="Naturalisme adalah aliran seni rupa yang mengedepankan keakuratan dan kemiripan objek yang digambar supaya terlihat lebih natural dan juga realistis seperti referensinya yang ada di alam. "
        />
        <Card
          title="Romantisisme"
          description="Romantisisme adalah aliran seni yang mengedepankan unsur emosi pada suatu karya dengan cara pembangunan citra yang dramatis, teatrikal, dan suasana seperti yang ada di dalam mimpi."
        />
        <Card
          title="Surealisme"
          description="Surealisme adalah aliran seni yang menyajikan kontradiksi antara mimpi dan realita kemudian menjadikannya nyata ke dalam sebuah gambar yang menampilkan objek-objek nyata dalam kondisi yang tidak akan mungkin terjadi di dunia nyata."
        />
      </div>
      {/* <img
        src={"/img/senirupa.jpg"} // Contoh penggunaan tag <img> menghasilkan error dari Eslint
        alt={"senirupa"}
        width={300}
        height={200}
      /> */}
      <h5>Blog Lainnya</h5>
      <div className="blog">
        <Image
          className="contoh"
          src={lukis}
          alt="lukis"
          width={300}
          height={200}
        />
        <Tag />
      </div>
      <div className="flex flex-row justify-end mb-4 mr-20">
        <div className="mb-4 ml-4">
          <CSSModule />
        </div>
        <div className="ml-4">
          <CSSTailwind />
        </div>
        <div className="ml-4">
          <NormalCSS />
        </div>
      </div>
      <Link href="./responsive">
        <p className="p-5 font-bold justify-center text-center bg-white rounded-md align-center hover:text-blue-500 transition duration-300 mb-10 w-1/2 mx-auto">
          Ke Halaman Responsif
        </p>
      </Link>
      <CustomButton />
    </main>
  );
}

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={`./${title}`}>Know More...</a>
    </div>
  );
}
