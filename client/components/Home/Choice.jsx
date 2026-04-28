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
          <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--bg-red-color)] text-white opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

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

          <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--bg-red-color)] text-white opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className="mt-[100px]">
        <div className="flex flex-col items-center justify-center bg-[url(./images/others/drivoxe_bg.svg)] bg-contain bg-no-repeat">
          <h3 className="text-xl">HOW IT WORKS</h3>
          <h2 className="text-5xl">Simple Steps to Get the Car</h2>
          <div className="mt-[100px] grid w-2/3 grid-cols-2 gap-4">
            <div className="col-span-2 flex">
              <div className="mr-8 w-[156px]">
                <h3 className="text-right text-2xl">Select</h3>
                <p className="text-right text-lg">
                  Choose your desired car from our fleet.
                </p>
              </div>
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[30px] bg-white">
                <img src="./images/icons/touch.svg" alt="touch_icon" />
              </div>
            </div>
            <div className="col-span-2 col-start-2 flex">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[30px] bg-red-300">
                <img src="./images/icons/book.svg" alt="book_icon" />
              </div>
              <div className="ml-8 w-[156px]">
                <h3 className="text-2xl">Book</h3>
                <p className="text-lg">
                  Reserve your car online or through our app.
                </p>
              </div>
            </div>
            <div className="col-span-2 flex">
              <div className="mr-8 w-[156px]">
                <h3 className="text-right text-2xl">Drive</h3>
                <p className="text-right text-lg">
                  Pick up your car and hit the road.
                </p>
              </div>
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[30px] bg-white">
                <img src="./images/icons/drive.svg" alt="drive_icon" />
              </div>
            </div>
            <div className="col-span-2 col-start-2 flex">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[30px] bg-white">
                <img src="./images/icons/car.svg" alt="car_icon" />
              </div>
              <div className="ml-8 w-[156px]">
                <h3 className="text-2xl">Return</h3>
                <p className="text-lg">
                  Bring the car back at the end of your rental period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
