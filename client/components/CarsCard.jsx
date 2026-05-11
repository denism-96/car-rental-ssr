import React, { useEffect, useState } from "react";
import TitlePages from "./TitlePages";
import Banner from "./Ui/Banner";
import Button from "./Ui/Button";
import { useParams } from "react-router-dom";

export default function CarsCard() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/cars`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === Number(id)) {
            return setCar(data[i]);
          }
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <section className="my-24">
        <div className="grid grid-cols-2 gap-12">
          <div className="grid grid-cols-3 gap-6">
            <img
              className="col-span-3"
              src="/images/carsCards/main_front.png"
              alt=""
            />
            <img src="/images/carsCards/front.png" alt="" />
            <img src="/images/carsCards/right.png" alt="" />
            <img src="/images/carsCards/back.png" alt="" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="mb-6 text-5xl font-bold">
              {car.brand} {car.model}
            </h1>
            <span className="mb-1 text-xl uppercase opacity-60">
              Starting at
            </span>
            <span className="mb-6 text-4xl font-bold">
              ${car.pricePerDay}/day
            </span>
            <p className="mb-8 text-lg opacity-60">
              Elevate your journey with the Ford Mustang Convertible, the
              epitome of American muscle and open-air excitement. Feel the wind
              in your hair as you experience the power, style, and iconic allure
              of this classic masterpiece. Cruise with confidence, top down.
            </p>
            <Button className="btn btn_red mb-8">Book Now</Button>
            <h3>SPECIFICATIONS</h3>
            <div>
              <span>{car.year} year</span>
              <span>{car.passengers} passengers</span>
              <span>{car.enginePower} HP</span>
              <span>{car.engineVolume} L.</span>
              <span>{car.bodyType}</span>
            </div>
          </div>
        </div>
        <Banner
          title={
            "Book Your Adventure Today and Feel the Power of the Open Road."
          }
          isButton={true}
          textButton="Let’s Drive with Us"
          classTitle={"text-white w-[841px] mb-10"}
          bgImage={'bg-[url("/images/banners/cars_card_banner.png")]'}
        />
      </section>
    </>
  );
}
