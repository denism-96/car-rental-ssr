import React from "react";
import Button from "@client/components/Ui/Button.jsx";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="my-24 flex">
      <div>
        <h1 className="text_shadow text-[200px] font-bold">404</h1>
        <h2 className="mb-4 text-5xl">Page Not Found</h2>
        <p className="mb-4 text-lg">
          Looks loke you`ve taken a wrong turn. The page you`re looking for
          doesn`t exist or has been moved.
        </p>
        <Button className="btn btn_red">
          <Link to={"/"}>Back to Homepage</Link>
        </Button>
      </div>
      <div>
        <img
          className="mask-radial-from-regal-blue"
          src="/images/others/not_found_car.png"
          alt="red car"
        />
      </div>
    </div>
  );
}
