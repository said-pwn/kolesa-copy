import { Link, useLocation } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { AiOutlineTool, AiOutlineFire, AiOutlineSetting } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { MdArticle } from "react-icons/md";
import IconCar from "./IconCar";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

const Hero = () => {
  const location = useLocation();
  const { texts } = useContext(LanguageContext);

  const links = [
    { to: "/", label: texts.cars, icon: <FaCar className="text-blue-500 text-2xl" /> },
    { to: "/new", label: texts.newCars, icon: <IconCar /> },
    { to: "/parts", label: texts.parts, icon: <AiOutlineSetting className="text-blue-500 text-2xl" /> },
    { to: "/repair", label: texts.repair, icon: <AiOutlineTool className="text-blue-500 text-2xl" /> },
    { to: "/commercial", label: texts.commercial, icon: <FiTruck className="text-blue-500 text-2xl" /> },
    { to: "/read", label: texts.read, icon: <MdArticle className="text-blue-500 text-2xl" /> },
    { to: "/hot-offers", label: texts.hotOffers, icon: <AiOutlineFire className="text-blue-500 text-2xl" /> },
  ];

  return (
    <div className="flex">
      <div className="w-full px-6 hidden md:block">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2 px-2 md:px-0">
          {links.map(({ to, label, icon }) => (
            <Link key={to} to={to}>
              <button
                className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer whitespace-nowrap transition-all duration-200
                  ${location.pathname === to
                    ? "bg-blue-100 text-blue-600 shadow"
                    : "bg-transparent hover:bg-gray-200 text-black"
                  }`}
              >
                {icon}
                <span>{label}</span>
              </button>
            </Link>
          ))}
        </div>

        <div className="md:flex bg-orange-100 my-5 rounded flex-wrap gap-20 px-4 py-3">
          <button className="border-b border-dotted text-blue-500 hover:text-red-500 transition cursor-pointer hover:border-none">
            {texts.legkovye}
          </button>
          <button className="border-b border-dotted text-blue-500 hover:text-red-500 transition cursor-pointer hover:border-none">
            {texts.mototechnika}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
