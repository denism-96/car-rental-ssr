import React, { useState } from "react";
import "../../styles/accordeon.css";

export default function Accordeon({ accData, title }) {
  const [isActive, setIsActive] = useState(null);

  function toogleAccordeon(index) {
    return setIsActive(isActive === index ? null : index);
  }
  return (
    <>
      <div className="faq-acc-content">
        <h2 className="faq-acc-title">{title}</h2>
        {accData.map((item, index) => (
          <div
            key={index}
            className={`faq-acc-container ${isActive === index ? "active" : ""}`}
          >
            <button
              onClick={() => toogleAccordeon(index)}
              className="faq-acc-btn"
            >
              {item.subtitle}
            </button>
            <p>{item.descr}</p>
          </div>
        ))}
      </div>
    </>
  );
}
