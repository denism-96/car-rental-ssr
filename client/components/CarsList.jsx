import React from "react";
import { useEffect, useState } from "react";
import Button from "./Ui/Button";

export default function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-16">
        {cars.map((item, index) => (
          <div key={item.id} className="w-[280px] bg-gray-50 p-3">
            <img className="mb-8" src={item.image} alt="car image" />
            <div>
              <h1 className="mb-5 text-2xl">
                {item.brand} {item.model} {item.year}
              </h1>
              <span className="text-base opacity-60">Starting at</span>
              <div className="mt-1 flex justify-between">
                <span className="text-2xl font-bold">
                  {item.pricePerDay}/day
                </span>
                <Button className={"btn btn_red"}>Rent</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
