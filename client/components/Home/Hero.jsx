import React from "react";
import Button from "../Ui/Button";
import LogoSlider from "../Ui/LogoSlider";

export default function Hero() {
  return (
    <section>
      <div className="h-[660px] bg-[url(/images/others/main_car.png)] bg-contain bg-no-repeat">
        <div className="flex justify-between pt-20">
          <div className="w-96 flex-col">
            <h1 className="title mb-14">
              Your Journey,<br></br> Your Car,<br></br> Your Way
            </h1>
            <p className="mb-14 text-lg opacity-60">
              Experience the ultimate freedom of choice with GoCar - tailor your
              adventure by choosing from our premium fleet of vehicles.
            </p>
            <Button className="btn btn_red">Get started</Button>
          </div>
          <div>
            <img />
          </div>
          <div className="mt-14 flex-col items-end justify-between">
            <div className="mb-8 flex">
              <img src="/images/avatars/man_cost_hero.png" />
              <img src="/images/avatars/man_backpack_hero.png" />
              <img src="/images/avatars/woman_hero.png" />
            </div>
            <div className="mb-32">
              <p className="mb-4 w-fit text-xl">12.5K + PEOPLE</p>
              <p className="w-40 text-sm opacity-60">
                has used our services such as renting, buying, or even selling
                their car.
              </p>
            </div>
            <div className="flex w-52 flex-wrap justify-between text-[var(--red-text)]">
              <Button className="btn mb-4 border border-[var(--bg-red-color)]">
                Rent
              </Button>
              <Button className="btn mb-4 mr-8 border border-[var(--bg-red-color)]">
                Buy
              </Button>
              <Button className="btn border border-[var(--bg-red-color)]">
                Sell
              </Button>
              <Button className="btn border border-[var(--bg-red-color)]">
                Consult
              </Button>
            </div>
            <p className="mt-10 text-base">Learn more</p>
          </div>
        </div>
      </div>
      <LogoSlider />
    </section>
  );
}
