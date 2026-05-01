import React from "react";

export default function TitlePages({ pathPage, title, url, alt }) {
  return (
    <div className="mb-24 flex flex-col items-center">
      <h2 className="mb-6 text-xl">{pathPage}</h2>
      <h1 className="mb-14 text-5xl font-bold">{title}</h1>
      <img className="rounded-3xl" src={url ? url : ""} alt="touch car panel" />
    </div>
  );
}
