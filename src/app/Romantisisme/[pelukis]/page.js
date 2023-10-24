import "@/app/globals.css";
import React from "react";
import { getPelukisListRom } from "../../components/listPelukisRom.js";

export default function pelukis({ params }) {
  const DataPelukis = getPelukisListRom(params.pelukis);
  if (!DataPelukis) {
    return <div>Data not found</div>;
  }

  return (
    <div className="mb-10 p-10">
      <div className="mt-10 text-center mx-auto border-2 align-center p-29 w-1/2">
        <div>
          <h1 className="text-2xl mt-8 mb-5 text-white font-bold">
            {DataPelukis.title}
          </h1>
          <p className="px-10 mb-8 text-white">{DataPelukis.description}</p>
        </div>
      </div>
    </div>
  );
}
