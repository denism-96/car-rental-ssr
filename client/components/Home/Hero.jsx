import React from "react";
import Button from "../Ui/Button";

export default function Hero() {
  return (
    <section className="">
      <div className="bg-[url(/images/others/main_car.png)] h-[810px] bg-contain bg-no-repeat">
        <div className="flex justify-between items-center">
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
          <div>
            <div className="flex mb-8">
              <img src="/images/avatars/man_cost_hero.png" />
              <img src="/images/avatars/man_backpack_hero.png" />
              <img src="/images/avatars/woman_hero.png" />
            </div>
            <div>
              <div className="mb-4">12.5K + PEOPLE</div>
              <p className="text-sm">
                has used our services such as renting, buying, or even selling
                their car.
              </p>
            </div>
            <div>
              <button>Rent</button>
              <button>Buy</button>
              <button>Sell</button>
              <button>Consult</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
