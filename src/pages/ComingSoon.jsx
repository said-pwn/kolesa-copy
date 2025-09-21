// src/pages/ComingSoon.jsx
import React from "react";
import { Wrench, CarFront } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white text-center p-6">
      <CarFront className="w-16 h-16 text-blue-500 animate-pulse mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
        Скоро здесь будет что-то крутое!
      </h1>
      <p className="text-black text-lg max-w-md">
        Мы уже работаем над этой страницей, скоро вы сможете посмотреть её.
      </p>
      <Wrench className="w-10 h-10 text-gray-500 mt-6 animate-spin-slow" />
    </div>
  );
}
