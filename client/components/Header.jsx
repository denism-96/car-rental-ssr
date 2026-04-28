import React from "react";
import { Link } from "react-router-dom";
import Button from "./Ui/Button";

export default function Header() {
  return (
    <header className="absolute flex w-full max-w-[1340px] items-center justify-between">
      <Link to="/">
        <img src="/images/others/main_logo.svg"></img>
      </Link>
      <nav className="w-full max-w-sm">
        <ul className="flex justify-between text-base">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Auto</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Faq`s</Link>
          </li>
        </ul>
      </nav>
      <div className="flex text-base">
        <Button className="btn btn_transparent">Contacts</Button>
        <Button className="btn btn_red ml-4">Sign up</Button>
      </div>
    </header>
  );
}
