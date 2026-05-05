import CarsList from "../components/CarsList";
import Choice from "../components/Home/Choice";
import Hero from "../components/Home/Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <CarsList carsOnPage={6} className={"my-24 flex flex-col items-center"} />
      <Choice />
    </>
  );
}

export default HomePage;
