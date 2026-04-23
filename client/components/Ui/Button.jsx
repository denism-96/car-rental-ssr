import React from "react";

export default function Button({ children, className, ...props }) {
  return <button className={className}>{children}</button>;
}
