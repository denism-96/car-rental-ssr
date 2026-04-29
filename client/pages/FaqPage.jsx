import React from "react";
import Accordeon from "../components/Ui/Accordeon";

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
      <Accordeon />
    </section>
  );
}
