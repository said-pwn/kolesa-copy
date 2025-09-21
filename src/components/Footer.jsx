import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 mt-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 px-6 py-8 text-gray-600 text-sm">
        
        {/* Левый блок */}
        <div className="text-center sm:text-left">
          <p>© 2025 «Avtobozor»</p>
        </div>

        {/* Правый блок */}
        <div className="text-center sm:text-right">
          <a
            href="/privacy"
            className="hover:underline cursor-pointer"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>

      {/* Нижняя линия с маленьким текстом */}
      <div className="bg-gray-200 text-gray-700 text-xs py-2 text-center mb-14 sm:mb-0">
        <p className="mt-1">
          Нашли ошибку?{" "}
          <a
            href="https://t.me/sddffhf1"
            className="text-blue-500 hover:underline"
          >
            Напишите сюда
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
