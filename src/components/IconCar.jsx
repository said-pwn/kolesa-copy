// NewCar.jsx
import React from "react";
import { FaCar } from "react-icons/fa";

const IconCar = ({ size = "2xl" }) => {
  // преобразуем size в px для tailwind
  const tailwindSize = size === "1xl" ? "8" : size;

  return (
    <div className="relative inline-block">
      <FaCar className={`text-blue-500 text-${tailwindSize}`} />
      <span className="absolute -top-2 -right-4 bg-blue-500 text-white text-[7px] font-bold px-1  shadow rounded-r rounded-t">
        NEW
      </span>
    </div>
  );
};

export default IconCar;

