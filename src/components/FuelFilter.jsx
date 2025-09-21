import React from "react";

const FuelFilter = () => {
  return (
    <div className="px-4 sm:px-6">
      <div>
        <div className="flex gap-2 items-center mb-4">
          <h2 className="text-2xl font-bold text-black">
            Автомобили по типу топлива
          </h2>
        </div>

        {/* Добавил flex-wrap и адаптивный gap */}
        <div className="flex flex-wrap gap-20 text-blue-600">
          <button className="border-b  border-dotted border-blue-600 hover:text-red-600 hover:border-none cursor-pointer">
            Бензин
          </button>
          <button className="border-b border-dotted border-blue-600 hover:text-red-600 hover:border-none cursor-pointer">
            Дизель
          </button>
          <button className="border-b border-dotted border-blue-600 hover:text-red-600 hover:border-none cursor-pointer">
            Гибрид
          </button>
          <button className="border-b border-dotted border-blue-600 hover:text-red-600 hover:border-none cursor-pointer">
            Электро
          </button>
          <button className="border-b border-dotted border-blue-600 hover:text-red-600 hover:border-none cursor-pointer">
            Газ
          </button>
          <button className="border-b border-dotted border-blue-600 hover:text-red-600 hover:border-none cursor-pointer">
            Газ-Бензин
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuelFilter;
