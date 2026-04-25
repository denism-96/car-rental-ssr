import React from "react";
import "../../styles/logoSlider.css";

export default function LogoSlider() {
  const logos = [
    "./images/brands/tesla.png",
    "./images/brands/audi.png",
    "./images/brands/bentley.png",
    "./images/brands/bmw.png",
    "./images/brands/chrysler.png",
    "./images/brands/dodge.png",
    "./images/brands/ferrari.png",
    "./images/brands/ford.png",
    "./images/brands/honda.png",
    "./images/brands/hyundai.png",
    "./images/brands/jaguar.png",
    "./images/brands/jeep.png",
    "./images/brands/lamborghini.png",
    "./images/brands/maserati.png",
    "./images/brands/porsche.png",
    "./images/brands/subaru.png",
    "./images/brands/toyota.png",
  ];

  const dublicateLogo = [...logos, ...logos];

  return (
    <div className="slider-container">
      <div className="sliderLogo">
        {dublicateLogo.map((logo, index) => {
          return (
            <div className="brandsLogo" key={index}>
              <img src={logo} alt={`${index} imaGE`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
