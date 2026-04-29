import React, { useState } from "react";
import "../../styles/accordeon.css";

export default function Accordeon() {
  const [isActive, setIsActive] = useState(null);

  function toogleAccordeon(index) {
    return setIsActive(isActive === index ? null : index);
  }
  return (
    <>
      <div className="faq-acc-content">
        <h2 className="faq-acc-title">Booking and Reservations</h2>
        {[0, 1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`faq-acc-container ${isActive === index ? "active" : ""}`}
          >
            <button
              onClick={() => toogleAccordeon(index)}
              className="faq-acc-btn"
            >
              How do I book a car with Drivoxe?
            </button>
            <p>
              Booking with Drivoxe is easy. Visit our website or app, select
              your preferred car, set your dates, and complete the reservation
              in a few clicks.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
