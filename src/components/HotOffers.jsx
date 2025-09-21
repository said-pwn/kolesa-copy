import React, {  useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import fire from "../assets/hero/fire.png";
import carrr from "../assets/hero/carrr.webp";
import { Link } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";

function useLanguage() {
  const { language, texts } = useContext(LanguageContext);
  return { language, text: texts };
}

function HotOfferCard({ image, title, price, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 w-64 sm:w-56 flex-shrink-0">
      {/* Картинка */}
      <div className="aspect-square w-full">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-xl" />
      </div>

      {/* Контент */}
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold text-gray-900 truncate">{title}</h3>
        <p className="text-blue-600 font-bold text-sm">{price}</p>
        <p className="text-gray-500 text-xs">{description}</p>
      </div>
    </div>
  );
}


export default function HotOffers() {
  const offers = [
    { image: carrr, title: "Toyota Camry 2022", price: "25 000 $", description: "2.5L, автомат, пробег 50 000 км." },
    { image: carrr, title: "BMW X5 2021", price: "45 000 $", description: "Полный привод, минимальный пробег." },
    { image: carrr, title: "Chevrolet Malibu 2020", price: "18 500 $", description: "Экономичный и комфортный седан." },
    { image: carrr, title: "Mercedes-Benz E200", price: "37 000 $", description: "AMG пакет, идеальное состояние." },
    { image: carrr, title: "Hyundai Sonata 2022", price: "22 000 $", description: "Бизнес класс по доступной цене." },
    { image: carrr, title: "Kia K5 2021", price: "21 000 $", description: "Элегантный и экономичный." },
    { image: carrr, title: "Audi A6 2020", price: "40 000 $", description: "Quattro, отличная комплектация." },
    { image: carrr, title: "Tesla Model 3", price: "35 000 $", description: "Электро, автопилот, топовая версия." },
    { image: carrr, title: "Chevrolet Captiva", price: "19 000 $", description: "Кроссовер для семьи." },
    { image: carrr, title: "Toyota Prado 2021", price: "55 000 $", description: "Внедорожник в идеале." },
  ];


  const { text } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // ПК
  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + 1, offers.length - visibleCount));

  return (
    <section className="px-4 py-6">
      <h2 className="text-xl sm:text-2xl mb-4 flex items-center gap-2">
          {text.hotof}
        <img src={fire} alt="fire" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
        <Link
          to="/soon"
          className="text-xs sm:text-sm text-blue-700 border-b hover:text-red-600 hover:border-none"
        >
          {text.want}
        </Link>
      </h2>

      {/* ПК версия — слайдер */}
      <div className="relative hidden sm:block">
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:text-red-600"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${startIndex * 270}px)` }}
          >
            {offers.map((offer, i) => (
              <HotOfferCard key={i} {...offer} />
            ))}
          </div>
        </div>

        {startIndex < offers.length - visibleCount && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10 hover:text-red-600"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {/* Мобильная версия — свайп по горизонтали */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide flex gap-3">
        {offers.map((offer, i) => (
          <HotOfferCard key={i} {...offer} />
        ))}
      </div>

      <div className="text-sm text-gray-500 mt-5 hidden sm:block">
        Показаны {Math.min(visibleCount, offers.length - startIndex)} из {offers.length} предложений
      </div>

      <Link to="/submit-ad">
        <div className="flex items-center justify-center mt-9">
          <button className="cursor-pointer border-b border-blue-700 text-blue-700">
            {text.submitAd}
          </button>
        </div>
      </Link>
    </section>
  );
}
