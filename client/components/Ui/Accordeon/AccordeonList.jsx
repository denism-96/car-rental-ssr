import React from "react";
import accordeonData from "../../../../server/data/accordeonsData.js";
import Accordeon from "../../Ui/Accordeon/Accordeon.jsx";

export default function AccordeonList() {
  return (
    <>
      {accordeonData.map((item, index) => (
        <Accordeon accData={item} key={index} title={item.title} />
      ))}
    </>
  );
}
