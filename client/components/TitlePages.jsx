import React from "react";
import { useLocation } from "react-router-dom";

export default function TitlePages({ title, url, alt }) {
  function getPathName() {
    const locationPath = useLocation();

    return locationPath.pathname;
  }

  const pathPage = getPathName();

  return (
    <div className="mb-24 flex flex-col items-center">
      <h2 className="mb-6 text-xl uppercase"> home{pathPage}</h2>
      <h1 className="mb-14 text-5xl font-bold">{title}</h1>
      <img className="rounded-3xl" src={url ? url : ""} alt="touch car panel" />
    </div>
  );
}
