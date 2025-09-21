import { useState } from 'react';
import CarFilter from '../components/CarFilter';

const carData = [
  {
    id: 1,
    city: 'Алматы',
    brand: 'Toyota',
    transmission: 'automatic',
    fuel: 'gasoline',
    body: 'sedan',
    drive: 'fwd',
    engine: 1.8,
    price: 12000,
    image: 'https://i.ibb.co/QF55kyW6/11692.webp',
  },
  {
    id: 2,
    city: 'Астана',
    brand: 'BYD',
    transmission: 'manual',
    fuel: 'electric',
    body: 'suv',
    drive: 'awd',
    engine: 2.0,
    price: 18000,
    image: 'https://i.ibb.co/QF55kyW6/11692.webp',
  },
  {
    id: 3,
    city: 'Шымкент',
    brand: 'BYD',
    transmission: 'manual',
    fuel: 'electric',
    body: 'suv',
    drive: 'awd',
    engine: 5.0,
    price: 1000000,
    image: 'https://i.ibb.co/QF55kyW6/11692.webp',
  },
  // Добавь больше машин с картинками
];

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="max-w-6xl mx-auto mt-10 space-y-6 px-4">
      <CarFilter cars={carData} onResults={setResults} />

      <div>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((car) => (
              <div key={car.id} className="border rounded-lg shadow-md overflow-hidden">
                <img
                  src={car.image}
                  alt={car.brand}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">{car.brand} — {car.city}</h3>
                  <p className="text-gray-700">Кузов: {car.body}, Привод: {car.drive}</p>
                  <p className="text-gray-700">Объем: {car.engine} л</p>
                  <p className="text-gray-900 font-semibold">Цена: ${car.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Нет подходящих моделей</p>
        )}
      </div>
    </div>
  );
}
