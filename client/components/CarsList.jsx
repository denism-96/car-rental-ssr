import React from "react";
import { useEffect, useState } from "react";
import Button from "./Ui/Button";

export default function CarsList({ carsOnPage }) {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(1);

  const lastCarIndex = currentPage * carsOnPage;
  const firstCarIndex = lastCarIndex - carsOnPage;

  const currentCars = cars.slice(firstCarIndex, lastCarIndex);

  const totalPages = Math.ceil(cars.length / carsOnPage);

  const paginationPages = Array.from({ length: totalPages });

  function getCurrentPage() {
    return currentPage;
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <section className="my-24 flex flex-col items-center">
        <div className="grid max-w-[968px] grid-cols-3 gap-16">
          {currentCars.map((item, index) => (
            <div
              key={item.id}
              className="flex h-[406px] w-[280px] flex-col justify-between rounded-lg bg-gray-50 p-3"
            >
              <img className="mb-8" src={item.image} alt="car image" />
              <div className="flex grow flex-col justify-between">
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
        <div className="mt-8">
          {paginationPages.map((item, index) => (
            <button
              className={`rounded-full px-2 py-1 ${isActive === index + 1 ? "active_pagination" : ""}`}
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
                setIsActive(index + 1);
              }}
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
