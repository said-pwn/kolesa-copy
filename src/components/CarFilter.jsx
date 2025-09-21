import { useState, useEffect } from 'react';



export default function CarFilter({ cars = [], onResults }) {
  const [filters, setFilters] = useState({
    city: '',
    brand: '',
    transmission: '',
    fuel: '',
    body: '',
    drive: '',
    engineFrom: '',
    engineTo: '',
    priceFrom: '',
    priceTo: '',
  });



  const [matchedCount, setMatchedCount] = useState(0);

  

  useEffect(() => {
    const filtered = cars.filter((car) => {
  
      return (
        (!filters.city || car.city === filters.city) &&
        (!filters.brand || car.brand === filters.brand) &&
        (!filters.transmission || car.transmission === filters.transmission) &&
        (!filters.fuel || car.fuel === filters.fuel) &&
        (!filters.body || car.body === filters.body) &&
        (!filters.drive || car.drive === filters.drive) &&
        (!filters.engineFrom || car.engine >= parseFloat(filters.engineFrom)) &&
        (!filters.engineTo || car.engine <= parseFloat(filters.engineTo)) &&
        (!filters.priceFrom || car.price >= parseInt(filters.priceFrom)) &&
        (!filters.priceTo || car.price <= parseInt(filters.priceTo))
      );
    });
    setMatchedCount(filtered.length);
  }, [filters, cars]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    if (!Array.isArray(cars)) return;
    const results = cars.filter((car) => {
      return (
        (!filters.city || car.city === filters.city) &&
        (!filters.brand || car.brand === filters.brand) &&
        (!filters.transmission || car.transmission === filters.transmission) &&
        (!filters.fuel || car.fuel === filters.fuel) &&
        (!filters.body || car.body === filters.body) &&
        (!filters.drive || car.drive === filters.drive) &&
        (!filters.engineFrom || car.engine >= parseFloat(filters.engineFrom)) &&
        (!filters.engineTo || car.engine <= parseFloat(filters.engineTo)) &&
        (!filters.priceFrom || car.price >= parseInt(filters.priceFrom)) &&
        (!filters.priceTo || car.price <= parseInt(filters.priceTo))
      );
    });
     if (typeof onResults === 'function') {
    onResults(results);
  } else {
    console.warn('onResults не является функцией');
  }

    onResults(results);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <select name="city" onChange={handleChange} className="p-2 border rounded">
          <option value="">Где искать</option>
          <option value="Алматы">Алматы</option>
          <option value="Астана">Астана</option>
          <option value="Шымкент">Шымкент</option>
        </select>

        <select name="brand" onChange={handleChange} className="p-2 border rounded">
          <option value="">Марка</option>
          <option value="Toyota">Toyota</option>
          <option value="BYD">BYD</option>
          <option value="Kia">Kia</option>
        </select>

        <select name="transmission" onChange={handleChange} className="p-2 border rounded">
          <option value="">Коробка</option>
          <option value="manual">Механика</option>
          <option value="automatic">Автомат</option>
        </select>

        <select name="fuel" onChange={handleChange} className="p-2 border rounded">
          <option value="">Топливо</option>
          <option value="gasoline">Бензин</option>
          <option value="diesel">Дизель</option>
          <option value="electric">Электро</option>
        </select>

        <select name="body" onChange={handleChange} className="p-2 border rounded">
          <option value="">Кузов</option>
          <option value="sedan">Седан</option>
          <option value="suv">Внедорожник</option>
        </select>

        <select name="drive" onChange={handleChange} className="p-2 border rounded">
          <option value="">Привод</option>
          <option value="fwd">Передний</option>
          <option value="rwd">Задний</option>
          <option value="awd">Полный</option>
        </select>

        <input name="engineFrom" type="number" placeholder="Объем от (л)" onChange={handleChange} className="p-2 border rounded" />
        <input name="engineTo" type="number" placeholder="Объем до (л)" onChange={handleChange} className="p-2 border rounded" />

        <input name="priceFrom" type="number" placeholder="Цена от" onChange={handleChange} className="p-2 border rounded" />
        <input name="priceTo" type="number" placeholder="Цена до" onChange={handleChange} className="p-2 border rounded" />
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Показать модели
        </button>
        <span className="text-gray-600">Найдено: {matchedCount} авто</span>
      </div>
    </div>
  );
}
