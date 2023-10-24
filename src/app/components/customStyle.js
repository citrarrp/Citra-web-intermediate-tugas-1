import React from "react";

export default function CustomButton({ children }) {
  return (
    <button className="bg-custom-color text-white hover:bg-blue-500 hover:text-black font-bold font-sans py-4 px-4 rounded mx-auto w-1/2 mb-20">
      Ini Tombol Kustom
      {children}
    </button>
  );
}
