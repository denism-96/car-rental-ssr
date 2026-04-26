import React from "react";
import Button from "../Ui/Button";
import LogoSlider from "../Ui/LogoSlider";

export default function Hero() {
  return (
    <section>
      <div className=" bg-[url(/images/others/main_car.png)] h-[660px] bg-contain bg-no-repeat  ">
        <div className="flex justify-between  pt-20">
          <div className="flex-col w-96">
            <h1 className="title mb-14">
              Your Journey,<br></br> Your Car,<br></br> Your Way
            </h1>
            <p className="text-lg mb-14 opacity-60">
              Experience the ultimate freedom of choice with GoCar - tailor your
              adventure by choosing from our premium fleet of vehicles.
            </p>
            <Button className="btn btn_red">Get started</Button>
          </div>
          <div>
            <img />
          </div>
          <div className="flex-col justify-between items-end mt-14">
            <div className="flex mb-8">
              <img src="/images/avatars/man_cost_hero.png" />
              <img src="/images/avatars/man_backpack_hero.png" />
              <img src="/images/avatars/woman_hero.png" />
            </div>
            <div className="mb-32">
              <p className="mb-4 text-xl w-fit">12.5K + PEOPLE</p>
              <p className="text-sm w-40 opacity-60">
                has used our services such as renting, buying, or even selling
                their car.
              </p>
            </div>
            <div className="flex flex-wrap w-52 justify-between text-[var(--red-text)]">
              <Button className="btn border border-[var(--bg-red-color)] mb-4">
                Rent
              </Button>
              <Button className="btn border border-[var(--bg-red-color)] mr-8 mb-4">
                Buy
              </Button>
              <Button className="btn border border-[var(--bg-red-color)] ">
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
