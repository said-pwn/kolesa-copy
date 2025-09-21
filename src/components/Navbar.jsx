// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Globe, User, PlusCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCar, FaCarSide, FaMotorcycle } from "react-icons/fa";
import {  MdArticle } from "react-icons/md";
import {  AiOutlineTool, AiOutlineFire } from "react-icons/ai";
import {  AiOutlineSetting } from "react-icons/ai";
import IconCar from "./IconCar";
import { FiTruck } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";


const Navbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("RU");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

const links = [
  { to: "/", label: "Машины", icon: <FaCar className="text-blue-500 text-2xl" /> },
  { to: "/new", label: "Новые авто", icon: <IconCar /> },
  { to: "/parts", label: "Запчасти", icon: <AiOutlineSetting className="text-blue-500 text-2xl" /> },
  { to: "/repair", label: "Ремонт и услуги", icon: <AiOutlineTool className="text-blue-500 text-2xl" /> },
  { to: "/commercial", label: "Коммерческие", icon: <FiTruck className="text-blue-500 text-2xl" /> }, // <-- новая иконка
  { to: "/read", label: "Почитать", icon: <MdArticle className="text-blue-500 text-2xl" /> },
  { to: "/hot-offers", label: "Hot Offers", icon: <AiOutlineFire className="text-blue-500 text-2xl" /> },
  { to: "/easy", label: "Легковые авто", icon: <IoCarSportOutline className="text-blue-500 text-2xl" /> },
  { to: "/moto", label: "Мототехника", icon: <FaMotorcycle className="text-blue-500 text-2xl" /> },
];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
    setLanguageOpen(false);
  };

  const handleSubmitAd = () => {
    if (currentUser) {
      navigate("/submit-ad");
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* Верхний навбар - виден на md и выше */}
      <nav className="hidden md:flex bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          {/* ЛОГО */}
          <Link to="/" className="relative text-xl lg:text-2xl font-bold">
  Avtobozor
  <span className="absolute -top-2 -right-19 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-r rounded-t">
    test v0.1
  </span>
</Link>


          {/* Кнопки справа */}
          <div className="flex gap-4 items-center">
            {!currentUser ? (
              <Link
                to="/register"
                className="flex items-center gap-2 border px-3 py-1 border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm lg:text-base"
              >
                <User className="w-5 h-5" />
                <span>Вход / Регистрация</span>
              </Link>
            ) : (
              <Link
                to="/profile"
                className="flex items-center gap-2 border px-3 py-1 border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                <User className="w-5 h-5" />
                <span>{currentUser.nickname}</span>
              </Link>
            )}

            {/* Подать объявление */}
            <button
              onClick={handleSubmitAd}
              className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 transition rounded-lg text-sm lg:text-base cursor-pointer"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Подать объявление</span>
            </button>

            {/* Язык */}
            <select
              className="border px-3 py-1 border-gray-300 rounded-lg cursor-pointer text-sm lg:text-base"
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
            >
              <option>RU</option>
              <option>UZ</option>
              <option>EN</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Мобильная шапка - видна до md */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={26} />
        </button>
               <Link to="/" className="relative text-xl lg:text-2xl font-bold">
  Avtobozor
  <span className="absolute -top-2.5 -right-20 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-r rounded-t">
    test v0.1
  </span>
</Link>
        <div className="w-6" />
      </div>

      {/* Боковое меню для мобилок и планшетов */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed left-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <button
                className="self-end p-4"
                onClick={() => setMenuOpen(false)}
              >
                <X size={26} />
              </button>
              <div className="flex flex-col gap-3 px-4">
                {links.map(({ to, label, icon }) => {
                  const isActive = location.pathname === to;
                  return (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                        isActive
                          ? "bg-blue-100 text-blue-700 font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {icon}
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Нижнее меню для мобильных */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around items-center py-2 md:hidden z-40">
        <Link to="/" className="flex flex-col items-center text-gray-700">
          <Home size={22} />
          <span className="text-xs">Главная</span>
        </Link>

        <button
          onClick={handleSubmitAd}
          className="flex flex-col items-center text-blue-500"
        >
          <PlusCircle size={24} />
          <span className="text-xs">Подать</span>
        </button>

        <div className="relative">
          <button
            className="flex flex-col items-center text-gray-700"
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            <Globe size={22} />
            <span className="text-xs">{selectedLang}</span>
          </button>
          {languageOpen && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg">
              {["RU", "UZ", "EN"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLangSelect(lang)}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    selectedLang === lang ? "font-bold text-blue-500" : ""
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {currentUser ? (
          <Link to="/profile" className="flex flex-col items-center text-gray-700">
            <User size={22} />
            <span className="text-xs">Профиль</span>
          </Link>
        ) : (
          <Link to="/register" className="flex flex-col items-center text-gray-700">
            <User size={22} />
            <span className="text-xs">Вход</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
