import CarsList from "../components/CarsList";
import Choice from "../components/Home/Choice";
import Hero from "../components/Home/Hero";
import { useEffect, useState } from "react";

function HomePage() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsOnPage = 6;
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
    <>
      <Hero />
      <CarsList
        cars={cars}
        carsOnPage={carsOnPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentCars={currentCars}
        className={"my-24 flex flex-col items-center"}
      />
      <Choice />
    </>
  );
}

export default HomePage;
