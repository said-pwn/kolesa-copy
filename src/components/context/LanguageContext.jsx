// src/context/LanguageContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
  RU: {
    cars: "Машины",
    newCars: "Новые авто",
    parts: "Запчасти",
    repair: "Ремонт и услуги",
    commercial: "Коммерческие",
    read: "Почитать",
    hotOffers: "Hot Offers",
    submitAd: "Подать объявление",
    login: "Вход / Регистрация",
    profile: "Профиль",
    legkovye: "Легковые",
    mototechnika: "Мототехника",
    main: "Главная",
    enter:'Регистрация/Вход',
    hotof: "Горячие предложения",
    want:"Хочу быть здесь",
    search:"Поиск",
    avto:"авто",
    po:"по",
    sities:"городам",
    tashkent:"Ташкент"
  },
  UZ: {
    cars: "Mashinalar",
    newCars: "Yangi avtomobillar",
    parts: "Ehtiyot qismlar",
    repair: "Ta'mirlash va xizmatlar",
    commercial: "Tijorat",
    read: "O'qish",
    hotOffers: "Hot Offers",
    submitAd: "E'lon berish",
    login: "Kirish / Ro'yxatdan o'tish",
    profile: "Profil",
    legkovye: "Yengil avtomobillar",
    mototechnika: "Mototexnika",
    main: "Bosh sahifa",
    enter:"Ro'yxatlanish/Kirish",
    hotof: "Issiq takliflar",
    want:"Shu erda bolmoqchiman",
    search:"Qidiruv",
    avto:"avto",
    po:"bo'yicha",
    sities:"shaharlar",
    tashkent:"Toshkent"
  },
  EN: {
    cars: "Cars",
    newCars: "New Cars",
    parts: "Parts",
    repair: "Repair & Services",
    commercial: "Commercial",
    read: "Read",
    hotOffers: "Hot Offers",
    submitAd: "Submit Ad",
    login: "Login / Register",
    profile: "Profile",
    legkovye: "Passenger cars",
    mototechnika: "Motorcycles",
    main: "Home",
    enter:'Reg/Enter',
    hotof: "Hot Offers",
    want:"I want to be here",
    search:"Search",
    po:"by",
    sities:"cities",
    tashkent:"Tashkent"
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("RU");
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
      setTexts(translations[savedLang]);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      setTexts(translations[lang]);
      localStorage.setItem("language", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, texts, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
