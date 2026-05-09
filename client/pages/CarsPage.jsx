import React from "react";
import TitlePages from "@client/components/TitlePages.jsx";
import CarsList from "@client/components/CarsList.jsx";
import { useEffect, useState } from "react";

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsCategory, setCarsCategory] = useState([]);
  const [isActiveCat, setIsActiveCat] = useState(false);
  const visibleCars = carsCategory.length > 0 ? carsCategory : cars;
  const carsOnPage = 9;
  const lastCarIndex = currentPage * carsOnPage;
  const firstCarIndex = lastCarIndex - carsOnPage;
  const currentCars = visibleCars.slice(firstCarIndex, lastCarIndex);

  useEffect(() => {
    fetch(`/api/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, []);

  function filteredCategories(categories) {
    if (!isActiveCat) {
      const filterCat = cars.filter((car) => car.bodyType === categories);
      setCarsCategory(filterCat);
      setCurrentPage(1);
      setIsActiveCat(true);
    } else {
      setCarsCategory([]);
      setIsActiveCat(false);
    }
  }

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
              Showing{" "}
              <span>{visibleCars.length > 0 ? firstCarIndex + 1 : 0}</span>-
              {lastCarIndex > visibleCars.length
                ? visibleCars.length
                : lastCarIndex}{" "}
              of {visibleCars.length} results
            </span>
            <select name="sortCar" id="filtered_car">
              <option value="">Default Sorting</option>
              <option value="15">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <CarsList
            cars={visibleCars}
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
              <img className="h-[83px] w-[104px]" src={cars[0]?.image} alt="" />
              <div>
                <h3>{cars[0]?.brand}</h3>
                <span>${cars[0]?.pricePerDay}/day</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-gray-500">Categories</h2>
            <div className="grid grid-cols-2 uppercase">
              <span
                onClick={() => filteredCategories("Sedan")}
                className={`${isActiveCat ? "isActiveCat" : ""} pointer`}
              >
                Sedan
              </span>
              <span onClick={() => filteredCategories("Station wagon")}>
                Station wagon
              </span>
              <span onClick={() => filteredCategories("Offroad")}>Offroad</span>
              <span onClick={() => filteredCategories("Hatchback")}>
                Hatchback
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
