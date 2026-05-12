import React from "react";
import TitlePages from "@client/components/TitlePages.jsx";
import CarsList from "@client/components/CarsList.jsx";
import Banner from "@client/components/Ui/Banner.jsx";
import { useEffect, useState } from "react";

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsCategory, setCarsCategory] = useState([]);
  const [isActiveCat, setIsActiveCat] = useState(null);
  const visibleCars = carsCategory.length > 0 ? carsCategory : cars;
  const carsOnPage = 9;
  const lastCarIndex = currentPage * carsOnPage;
  const firstCarIndex = lastCarIndex - carsOnPage;
  const currentCars = visibleCars.slice(firstCarIndex, lastCarIndex);
  const categories = ["Sedan", "Offroad", "Station wagon", "Hatchback"];

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
      setIsActiveCat(categories);
    } else {
      setCarsCategory([]);
      setIsActiveCat(null);
    }
  }

  let popularCars = [...cars].sort((a, b) => b.visits - a.visits).slice(0, 4);
  return (
    <div className="my-24">
      <TitlePages
        title="Our Impressive Fleet"
        url={"/images/others/cars_page_head_banner.png"}
      />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="mb-10 flex w-[968px] justify-between">
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
            className="mb-10 border"
          />
          <div>
            <h2 className="uppercase">Popular cars</h2>
            <div className="mb-10">
              {popularCars.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <img className="h-[83px] w-[104px]" src={item.image} alt="" />
                  <div>
                    <h3>
                      {item.brand} {item.model}
                    </h3>
                    <span>${item.pricePerDay}/day</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="uppercase text-gray-500">Categories</h2>
            <div className="grid cursor-pointer grid-cols-2 uppercase">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className={`${isActiveCat === category ? "isActiveCat" : ""} mr-2`}
                  onClick={() => filteredCategories(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div></div>
        </aside>
      </div>
      <Banner
        title="Explore Our Fleet and Book Your Dream Car Today!"
        classTitle="text-white mb-10"
        position="right"
        bgImage={'bg-[url("/images/banners/cars_banner.png")]'}
        isButton={true}
        textButton={"Let’s Drive with Us"}
      />
    </div>
  );
}
