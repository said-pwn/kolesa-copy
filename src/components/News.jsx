import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://67c3350e1851890165ae75d1.mockapi.io/news/news";

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setNews)
      .catch(() => console.warn("Не удалось загрузить новости"));
  }, []);

  return (
    <div className="px-6 py-8 bg-gray-50  min-h-screen">
      <h1 className="text-3xl font-bold text-center  text-black mb-8">
        Новости Автобазара
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {news.map((n) => (
          <div
            key={n.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={n.image} alt={n.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{n.title}</h2>
              <Link
                to={`/news/${n.id}`}
                className="inline-block mt-3 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Читать →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
