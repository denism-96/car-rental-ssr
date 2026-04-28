import React, { Children } from "react";

export default function Banner({ children, className }) {
  return (
    <div className={`${className} h-[400px] w-full rounded-[30px]`}>
      {children}
    </div>
  );
}
