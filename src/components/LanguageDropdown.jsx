// LanguageDropdown.jsx
import React from "react";

const LanguageDropdown = ({ language, languageOpen, setLanguageOpen, handleLangSelect }) => {
  return (
    <div className="relative">
      <button
        className="border px-3 py-1 rounded-lg cursor-pointer text-sm lg:text-base"
        onClick={() => setLanguageOpen(!languageOpen)}
      >
        {language}
      </button>
      {languageOpen && (
        <div className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {["RU", "UZ", "EN"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLangSelect(lang)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                language === lang ? "font-bold text-blue-500" : ""
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
