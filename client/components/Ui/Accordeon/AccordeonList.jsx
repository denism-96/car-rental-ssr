import React from "react";
import accordeonData from "@client/data/accordeonsData.js";
import Accordeon from "@client/components/Ui/Accordeon/Accordeon.jsx";

export default function AccordeonList() {
  return (
    <>
      {accordeonData.map((item, index) => (
        <Accordeon accData={item} key={index} title={item.title} />
      ))}
    </>
  );
}
