import React from "react";

export default function Choice() {
  return (
    <>
      <section className="flex">
        <div className=" flex flex-col justify-around">
          <h2 className="text-5xl font-bold">Why Choose Drivoxe?</h2>
          <p className="text-lg opacity-60 w-72 mb-14">
            Join our satisfied customers who trust us for their journeys. We
            serve with a lot of values that you can feel directly.
          </p>
        </div>
        <img src="./images/others/choice_car.png" alt="red car" />
      </section>
      <section>
        <div className="flex justify-between items-center">
          <button>---</button>
          <div className="flex flex-col items-center justify-between w-[985px]">
            <h2 className="text-2xl text-[var(--red-text)] font-semibold ">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <h3 className="text-5xl my-10">
              "My Drivoxe experience was nothing short of incredible. The
              pristine car and impeccable service made my trip unforgettable.
              I'll be back for more."
            </h3>
            <div className="flex flex-col items-center">
              <img src="./images/avatars/aleea_thompson.png" alt="" />
              <span className="text-2xl opacity-60">Aleea Thompson</span>
            </div>
          </div>
          <button>---</button>
        </div>
      </section>
      <section></section>
    </>
  );
}
