import React from "react";
import Accordeon from "../components/Ui/Accordeon";
import Banner from "../components/Ui/Banner.jsx";
import Button from "../components/Ui/Button.jsx";
import accordeonData from "../../server/data/accordeonsData.js";
export default function FaqPage() {
  return (
    <section className="mt-32">
      <div className="flex flex-col items-center">
        <h2 className="mb-6 text-xl">Home/FAQs</h2>
        <h1 className="mb-14 text-5xl font-bold">Frequently Asked Questions</h1>
        <img
          className="rounded-3xl"
          src="/images/others/touch_panel.png"
          alt="touch car panel"
        />
      </div>
      <section className="grid grid-cols-2">
        {accordeonData.map((item, index) => (
          <Accordeon accData={item} key={index} title={item[0].title} />
        ))}
      </section>
      <Banner
        className={
          "mb-10 flex items-center bg-[url(./images/banners/faq_banner.png)]"
        }
      >
        <div className="ml-24 w-[360px]">
          <h2 className="text-5xl">Still Have Questions?</h2>
          <p className="my-6 text-xl font-medium">Contact Us for Assistance</p>
          <Button className={"btn btn_red"}>Contact Us</Button>
        </div>
      </Banner>
    </section>
  );
}
