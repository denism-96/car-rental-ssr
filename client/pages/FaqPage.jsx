import React from "react";
import Banner from "../components/Ui/Banner.jsx";
import Button from "../components/Ui/Button.jsx";
import AccordeonList from "../components/Ui/Accordeon/AccordeonList.jsx";
import TitlePages from "../components/TitlePages.jsx";
export default function FaqPage() {
  return (
    <section className="mt-32">
      <TitlePages
        title={"Frequently Asked"}
        url={"/images/others/touch_panel.png"}
      />
      <section className="grid grid-cols-2">
        <AccordeonList />
      </section>
      <Banner
        title={"Still Have Questions?"}
        bgImage={'bg-[url("/images/banners/faq_banner.png")]'}
        isButton={true}
        textButton={"Contact Us"}
      >
        <p className="my-6 text-xl font-medium uppercase">
          Contact Us for Assistance
        </p>
      </Banner>
    </section>
  );
}
