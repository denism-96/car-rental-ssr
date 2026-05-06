import React from "react";
import TitlePages from "@client/components/TitlePages.jsx";
import CarsList from "@client/components/CarsList.jsx";
import { useEffect, useState } from "react";

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsOnPage = 9;
  const lastCarIndex = currentPage * carsOnPage;
  const firstCarIndex = lastCarIndex - carsOnPage;
  const currentCars = cars.slice(firstCarIndex, lastCarIndex);

  useEffect(() => {
    fetch(`http://localhost:3000/api/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-24">
      <TitlePages
        title="Our Impressive Fleet"
        url={"/images/others/cars_page_head_banner.png"}
      />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex w-[968px] justify-between">
            <span>
              Showing <span>{firstCarIndex + 1}</span>-
              {lastCarIndex > cars.length ? cars.length : lastCarIndex} of{" "}
              {cars.length} results
            </span>
            <select name="sortCar" id="filtered_car">
              <option value="">Default Sorting</option>
              <option value="15">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <CarsList
            cars={cars}
            carsOnPage={carsOnPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentCars={currentCars}
            className={"mb-24 flex max-w-[968px] flex-col"}
          />
        </div>

        <aside>
          <input
            name="search_car"
            type="text"
            placeholder="Search Your Pick Car..."
            className="border"
          />
          <div>
            <h2 className="uppercase">Popular cars</h2>
            <div className="flex items-center">
              <img className="h-[83px] w-[104px]" src={cars[0].image} alt="" />
              <div>
                <h3>{cars[0].brand}</h3>
                <span>${cars[0].pricePerDay}/day</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-gray-500">Categories</h2>
            <div className="grid grid-cols-2 uppercase">
              <span>Sedan</span>
              <span>Station wagon</span>
              <span>Offroad</span>
              <span>Hatchback</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
