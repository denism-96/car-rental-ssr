import React, { Children } from "react";
import Button from "./Button";

function getPositionClass(pos) {
  let positionClass = "items-start";
  if (pos === "center") {
    positionClass = "items-center";
  } else if (pos === "right") {
    positionClass = "items-end";
  }
  return positionClass;
}

export default function Banner({
  children,
  className,
  position,
  title,
  bgImage,
  isButton,
  textButton,
  classTitle,
}) {
  const positionClass = getPositionClass(position);
  return (
    <div
      className={`${className ? className : ""} ${positionClass} ${bgImage} mb-10 flex h-[400px] w-full flex-col rounded-[30px]`}
    >
      <div className="m-24 w-[360px]">
        <h2 className={`text-5xl ${classTitle ? classTitle : ""}`}>{title}</h2>
        {children}
        {isButton ? (
          <Button className={"btn btn_red"}>{textButton}</Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
