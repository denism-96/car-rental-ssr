import React from "react";
import { useEffect, useState } from "react";
import Button from "./Ui/Button";
import { Link } from "react-router-dom";

export default function CarsList({
  carsOnPage,
  cars,
  firstCarIndex,
  lastCarIndex,
  currentPage,
  setCurrentPage,
  currentCars,
  className,
}) {
  const totalPages = Math.ceil(cars.length / carsOnPage);

  const paginationPages = Array.from({ length: totalPages });

  return (
    <>
      <section className={` ${className} `}>
        <div className="grid grid-cols-3 gap-16">
          {currentCars.map((item, index) => (
            <div
              key={item.id}
              className="flex h-[406px] w-[280px] flex-col justify-between rounded-lg bg-gray-50 p-3 hover:bg-slate-200"
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

                  <Link to={`/cars/${item.id}`}>
                    {" "}
                    <Button className={"btn btn_red"}>Rent</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
          {paginationPages.map((item, index) => (
            <button
              className={`rounded-full px-2 py-1 ${currentPage === index + 1 ? "active_pagination" : ""}`}
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
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
