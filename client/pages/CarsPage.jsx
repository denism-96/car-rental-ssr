import React from "react";
import TitlePages from "@client/components/TitlePages.jsx";
import CarsList from "@client/components/CarsList.jsx";

export default function CarsPage() {
  return (
    <div className="my-24">
      <TitlePages
        title="Our Impressive Fleet"
        url={"/images/others/cars_page_head_banner.png"}
      />
      <CarsList
        carsOnPage={9}
        className={"my-24 flex max-w-[968px] flex-col"}
      />
    </div>
  );
}
