// import React from "react";
// import carrr from "../assets/hero/carrr.webp";

// const cars = [
//   { name: "Эконом", price: "до 1,5 млн ₽", img: carrr },
//   { name: "Комфорт", price: "до 3 млн ₽", img: carrr },
//   { name: "Бизнес", price: "до 6 млн ₽", img: carrr },
//   { name: "Премиум", price: "от 6 млн ₽", img: carrr },
// ];

// export default function DealerCars() {
//   return (
//     <section className="px-4 py-6">
//       <h2 className="text-4xl font-bold text-black mb-6">
//         Новые автомобили от дилеров
//       </h2>

//       {/* Сетка: на мобилке 1 карточка, на планшете 2, на десктопе 4 */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {cars.map((car, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center"
//           >
//             <img
//               src={car.img}
//               alt={car.name}
//               className="w-full h-56 object-contain" // увеличил высоту
//             />
//             <h3 className="text-blue-600 font-bold text-xl mt-4">{car.name}</h3>
//             <p className="text-black text-base">{car.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
