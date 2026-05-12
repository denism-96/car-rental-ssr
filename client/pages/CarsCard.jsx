import React, { useEffect, useState } from "react";
import TitlePages from "../components/TitlePages";
import Banner from "../components/Ui/Banner";
import Button from "../components/Ui/Button";
import NotFound from "@client/pages/NotFound.jsx";
import { useParams } from "react-router-dom";

export default function CarsCard() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/cars`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        const foundCar = data.find((item) => item.id === +id);
        setCar(foundCar || null);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <NotFound />;
  }

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
            <h3 className="mb-5">SPECIFICATIONS</h3>
            <div className="grid grid-cols-2 gap-2 [&>div]:flex [&>div]:flex-row [&>div]:items-start">
              <div>
                <img
                  className="mr-3"
                  src="/images/carsCards/drive.svg"
                  alt=""
                />
                <span>{car.year} year</span>
              </div>
              <div>
                <img
                  className="mr-3"
                  src="/images/carsCards/passengers.svg"
                  alt=""
                />
                <span>{car.passengers} passengers</span>
              </div>
              <div>
                <img
                  className="mr-3"
                  src="/images/carsCards/power.svg"
                  alt=""
                />
                <span>{car.enginePower} HP</span>
              </div>
              <div>
                <img
                  className="mr-3"
                  src="/images/carsCards/engine.svg"
                  alt=""
                />
                <span>{car.engineVolume} L.</span>
              </div>
              <div>
                <img className="mr-3" src="/images/carsCards/car.svg" alt="" />
                <span>{car.bodyType}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between [&_h3]:mb-2 [&_h3]:text-xl [&_p]:text-lg">
        <h2 className="w-fit text-5xl font-semibold">Car Features</h2>
        <div className="[&>div]:mb-6 [&>div]:h-[100%] [&>div]:max-h-[104px] [&>div]:max-w-[480px] [&>div]:rounded-xl [&>div]:bg-slate-100 [&>div]:px-5 [&>div]:py-2">
          <div>
            <h3>Convertible Top</h3>
            <p>
              Enjoy the open-air experience with an easy power-operated
              convertible top.
            </p>
          </div>
          <div>
            <h3>Infotainment System</h3>
            <p>Stay connected with a modern and flexible multimedia system.</p>
          </div>
          <div>
            <h3>Leather Interior</h3>
            <p>
              Experience premium comfort with leather-trimmed seats and design.
            </p>
          </div>
        </div>
        <div className="[&>div]:mb-6 [&>div]:h-[100%] [&>div]:max-h-[104px] [&>div]:max-w-[480px] [&>div]:rounded-xl [&>div]:bg-slate-100 [&>div]:px-5 [&>div]:py-2">
          <div>
            <h3>Sport Mode</h3>
            <p>
              Unleash the full power of the V8 engine for an exhilarating ride.
            </p>
          </div>
          <div>
            <h3>Advanced Safety</h3>
            <p>
              Benefit from modern safety features, including airbags and
              stability control.
            </p>
          </div>
          <div>
            <h3>Iconic Design</h3>
            <p>
              Turn heads with the timeless, bold styling of the Ford Mustang.
            </p>
          </div>
        </div>
      </section>
      <Banner
        title={"Book Your Adventure Today and Feel the Power of the Open Road."}
        isButton={true}
        textButton="Let’s Drive with Us"
        classTitle={"text-white w-[841px] mb-10"}
        bgImage={'bg-[url("/images/banners/cars_card_banner.png")]'}
      />
    </>
  );
}
