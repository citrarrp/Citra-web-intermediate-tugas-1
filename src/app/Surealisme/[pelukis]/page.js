import "@/app/globals.css";
import React from "react";
import { getPelukisListSur } from "../../components/listPelukisSur.js";

export default function pelukis({ params }) {
  const DataPelukis = getPelukisListSur(params);
  if (!DataPelukis) {
    return <div>Data not found</div>;
  }

  return (
    <div className="p-10 bg-slate800">
      <div className="mt-10 text-center border-2 align-center">
        <div>
          <h1 className="text-2xl">{DataPelukis.title}</h1>
          <p className="px-10 mb-4 ">{DataPelukis.description}</p>
        </div>
      </div>
    </div>
  );
}
