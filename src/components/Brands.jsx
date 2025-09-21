import { useEffect, useState } from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import dayjs from "dayjs";
import carrr from "../assets/hero/carrr.webp";

const brands = [
  { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_logo_detail.svg" },
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Changan", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Chery", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Geely", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Haval", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Kia", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Land Rover", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Mazda", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { name: "Mitsubishi", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mitsubishi-logo.svg" },
  { name: "Nissan", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Nissan_2020_logo.svg" },
  { name: "Skoda", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Skoda_Auto_logo.svg" },
  { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
  { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Volkswagen_logo_2019.svg" },
  { name: "Лада", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Lada_logo_2021.svg" },
];

export default function BrandList() {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(30);

  const visibleBrands = showAll ? brands : brands.slice(0, 15);

  useEffect(() => {
    // имитация загрузки
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Мок-данные для объявлений (позже заменишь на API/Supabase)
  const ads = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Mercedes-Benz GLS 450 #${i + 1}`,
    price: `${(55000000 + i * 100000).toLocaleString()} ₸`,
    description: `2021 г., Б/у, 3 л, бензин, автомат, пробег ${57000 + i * 1000} км, серый металлик...`,
    city: "Алматы",
    views: 14000 + i * 50,
    likes: 150 + i,
    date: dayjs().subtract(i, "day").format("DD MMMM"),
    image: carrr,
  }));

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  const handleShowMore = () => setVisibleCount((prev) => prev + 30);

  return (
    <section className="px-6 py-6">
    <aside className="block md:hidden w-64  top-20 ">
          <h3 className="text-lg font-bold mb-3">Поиск авто по городам</h3>
          <ul className="flex flex-col gap-2">
            {["Ташкент", "Самарканд", "Бухара", "Андижан", "Наманган", "Фергана"].map(
              (city) => (
                <li key={city}>
                  <a
                    href={`/city/${city.toLowerCase()}`}
                    className="text-blue-600 hover:underline"
                  >
                    {city}
                  </a>
                </li>
              )
            )}
          </ul>
        </aside>
      <section className="px-4 py-6 md:flex md:gap-6">
        {/* Левая часть — список объявлений */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Объявления</h2>

          <div className="flex flex-col gap-3">
            {ads.slice(0, visibleCount).map((ad) => (
              <div
                key={ad.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden"
              >
                <div className="flex">
                  {/* Фото */}
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-36 h-32 object-cover flex-shrink-0"
                  />

                  {/* Контент */}
                  <div className="flex flex-col justify-between p-3 w-full">
                    <div>
                      <h3 className="text-blue-700 font-bold text-sm hover:underline">
                        {ad.title}
                      </h3>
                      <p className="text-lg font-bold text-gray-900">{ad.price}</p>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {ad.description}
                      </p>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>{ad.city}</span>
                      <span>{ad.date}</span>
                    </div>
                  </div>
                </div>

                {/* Нижняя панель */}
                <div className="flex justify-between px-3 py-2 text-gray-500 text-xs border-t">
                  <div className="flex gap-4 items-center">
                    <span className="flex items-center gap-1">
                      <FaRegEye /> {ad.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegHeart /> {ad.likes}
                    </span>
                  </div>
                  <button className="text-orange-500 hover:underline">
                    Поднять ↑
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка "Показать ещё" */}
          {visibleCount < ads.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>

        

        {/* Правая колонка */}
        <aside className="hidden md:block w-64 sticky top-20 self-start">
          <h3 className="text-lg font-bold mb-3">Поиск авто по городам</h3>
          <ul className="flex flex-col gap-2">
            {["Ташкент", "Самарканд", "Бухара", "Андижан", "Наманган", "Фергана"].map(
              (city) => (
                <li key={city}>
                  <a
                    href={`/city/${city.toLowerCase()}`}
                    className="text-blue-600 hover:underline"
                  >
                    {city}
                  </a>
                </li>
              )
            )}
          </ul>
        </aside>
      </section>

      {/* Бренды */}
      <h2 className="text-4xl font-bold text-black mb-8">Поиск объявлений</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-5">
        {visibleBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
          >
            <img src={brand.logo} alt={brand.name} className="w-8 h-8 object-contain" />
            <span className="text-gray-800">{brand.name}</span>
          </div>
        ))}
      </div>

      <button
        className="mt-4 text-blue-500 text-sm cursor-pointer hover:text-red-600"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Скрыть ↑" : "Показать все ↓"}
      </button>
    </section>
  );
}
