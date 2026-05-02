import React from "react";
import { Link } from "react-router-dom";
import TitlePages from "../components/TitlePages";

export default function AboutPage() {
  return (
    <>
      <section className="mt-24">
        <TitlePages
          pathPage={"Home/About us"}
          title={"Who We are"}
          url={"./images/others/about_head_banner.png"}
        />
      </section>
      <section className="mb-24">
        <div className="relative h-[780px]">
          <div className="absolute">
            <button className="btn btn_red mr-5">--</button>
            <Link to="#">PICK THE CAR</Link>
          </div>
          <img
            className="absolute bottom-0 left-0"
            src="./images/others/about_page_car.png"
            alt="red car "
          />
          <div className="absolute right-0 top-0 w-[444px] bg-white px-10 py-20">
            <h3 className="mb-4 text-xl uppercase">Our Journey</h3>
            <h2 className="mb-12 text-5xl">
              Pioneering Premium <br></br> Car Rentals
            </h2>
            <p className="text-balance text-lg">
              Drivoxe embarked on a remarkable journey over a decade ago, driven
              by a relentless passion for redefining the travel experience. From
              the outset, our mission was clear: to provide the finest vehicles
              and exceptional service to make every journey unforgettable. We've
              upheld our commitment to delivering quality and variety, offering
              a diverse range of meticulously maintained vehicles to ensure you
              always drive in style.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-24 text-center align-middle text-5xl">
          Why Choose Drivoxe?
        </h2>
        <div className="grid grid-cols-2 gap-7">
          <div className="rounded-lg bg-gray-50 p-8">
            <h3 className="text-2xl">Quality & Variety</h3>
            <p className="text-lg opacity-60">
              Discover our diverse range of meticulously maintained vehicles,
              ensuring you always drive in style. From sleek sedans to rugged
              SUVs, our fleet offers the perfect ride for every occasion. We
              meticulously maintain each vehicle to the highest standards,
              ensuring not just style but also performance and reliability on
              your journey.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-8">
            <h3 className="text-2xl">Affordable Rates</h3>
            <p className="text-lg opacity-60">
              We believe that luxury travel should be accessible to all. We
              offer competitive prices without hidden fees, giving you the
              freedom to experience the comfort and style of our premium
              vehicles without breaking the bank. We're committed to providing
              affordable luxury for your travels.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-8">
            <h3 className="text-2xl">Easy Booking</h3>
            <p className="text-lg opacity-60">
              Reserving your dream car is a breeze with Drivoxe. Our
              user-friendly online platform and mobile app make the booking
              process straightforward and efficient. In just a few clicks, you
              can secure your choice of vehicle and hit the road, ensuring a
              seamless and hassle-free experience from start to finish.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-8">
            <h3 className="text-2xl">Customer Satisfaction</h3>
            <p className="text-lg opacity-60">
              Our loyal customers trust Drivoxe for the excellence of our
              service and the exquisite selection in our fleet. From the moment
              you book to the final mile of your journey, we are dedicated to
              providing top-notch service. We pride ourselves on our responsive
              customer support, available 24/7 to assist you. Your satisfaction
              is our ultimate reward.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
