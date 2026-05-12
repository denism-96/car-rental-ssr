import React, { useState } from "react";

export default function AdminPage() {
  const handler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let randomId = Math.floor(Math.random() * 100000 + 100);
    const car = {
      id: () => Math.random() * 100000 + 100,
      brand: formData.get("brand"),
      model: formData.get("model"),
      year: formData.get("year"),
      pricePerDay: formData.get("pricePerDay"),
      passengers: formData.get("passengers"),
      enginePower: formData.get("enginePower"),
      engineVolume: formData.get("engineVolume"),
      bodyType: formData.get("bodyType"),
      image: "/images/cars/toyota_camry.png",
      visits: formData.get("visits"),
    };
    e.currentTarget.reset();
    return car;
  };

  return (
    <div className="mt-24">
      <div>
        <form
          onSubmit={handler}
          className="[&>input]:mb-2 [&>input]:mr-2 [&>input]:border"
        >
          <input
            type="text"
            required
            placeholder="Введите бренд"
            name="brand"
          />
          <input
            type="text"
            required
            placeholder="Введите модель"
            name="model"
          />
          <input
            type="text"
            required
            placeholder="Введите год выпуска"
            name="year"
          />
          <input
            type="text"
            required
            placeholder="Цена за день"
            name="pricePerDay"
          />
          <input
            type="text"
            required
            placeholder="Количество пассажиров"
            name="passengers"
          />
          <input
            type="text"
            required
            placeholder="Мощность двигателя л.с."
            name="enginePower"
          />
          <input
            type="text"
            required
            placeholder="Объем двигателя л."
            name="engineVolume"
          />
          <input
            type="text"
            required
            placeholder="Тип кузова"
            name="bodyType"
          />
          <button type="submit">Добавить автомобиль</button>
        </form>
      </div>
      <div>
        <button>Удалить автомобиль</button>
      </div>
      <div>
        <button>Редактировать данные автомобиля</button>
      </div>
    </div>
  );
}
