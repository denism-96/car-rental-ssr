import React from "react";

export default function Choice() {
  return (
    <>
      <section className="flex">
        <div className="flex flex-col justify-around">
          <h2 className="text-5xl font-bold">Why Choose Drivoxe?</h2>
          <p className="mb-14 w-72 text-lg opacity-60">
            Join our satisfied customers who trust us for their journeys. We
            serve with a lot of values that you can feel directly.
          </p>
        </div>
        <img src="./images/others/choice_car.png" alt="red car" />
      </section>
      <section>
        <div className="flex items-center justify-between">
          <button>---</button>
          <div className="flex w-[985px] flex-col items-center justify-between">
            <h2 className="text-2xl font-semibold text-[var(--red-text)]">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <h3 className="my-10 text-5xl">
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
