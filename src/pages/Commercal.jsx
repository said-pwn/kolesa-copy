// Commercial.jsx
import React from "react";
import { FiTruck } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import { Link } from "react-router-dom";

const commercialVehicles = [
  { id: 1, name: "Грузовик MAN", image: "https://i.ibb.co/QF55kyW6/11692.webp", price: "15 000 $" },
  { id: 2, name: "Газель Next", image: "https://i.ibb.co/QF55kyW6/11692.webp", price: "10 500 $" },
  { id: 3, name: "Mercedes Sprinter", image: "https://i.ibb.co/QF55kyW6/11692.webp", price: "18 000 $" },
  { id: 4, name: "Isuzu N-Series", image: "https://i.ibb.co/QF55kyW6/11692.webp", price: "12 500 $" },
];

const hotOffers = [
  { id: 1, name: "MAN TGM 2021", image: "https://i.ibb.co/QF55kyW6/11692.webp", price: "20 000 $" },
  { id: 2, name: "Mercedes Atego 2020", image: "https://i.ibb.co/QF55kyW6/11692.webp", price: "22 000 $" },
];

const Commercial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Заголовок */}
      <div className="flex items-center gap-3 mb-6">
        <FiTruck className="text-blue-500 text-3xl" />
        <h1 className="text-2xl font-bold">Коммерческий транспорт</h1>
      </div>

      {/* Сетка с коммерческим транспортом */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {commercialVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold text-gray-700">{vehicle.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{vehicle.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Горячие предложения */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-4">
          <AiOutlineFire className="text-red-500 text-2xl" />
          <h2 className="text-xl font-bold">Hot Offers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hotOffers.map((offer) => (
            <div
              key={offer.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer relative"
            >
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="font-semibold text-gray-700">{offer.name}</h2>
                <p className="text-red-500 font-bold mt-1">{offer.price}</p>
              </div>
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                HOT
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопка возврата */}
      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default Commercial;
