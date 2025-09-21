import React from "react";
import { FaCar } from "react-icons/fa";

const Submit = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    window.location.href = "/register";
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
            <FaCar />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mt-8">Подать объявление</h1>
        <p className="mt-4 text-gray-600">
          Здесь вы сможете разместить информацию о своей машине. Форма скоро будет доступна!
        </p>

        <button
          className="mt-6 bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition shadow-md"
          disabled
        >
          Форма скоро
        </button>

        <p className="mt-4 text-sm text-gray-400">
          Обновления будут доступны в ближайшее время
        </p>
      </div>
    </div>
  );
};

export default Submit;
