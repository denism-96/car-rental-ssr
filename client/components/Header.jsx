import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="#" alt="logo" />
      </Link>
      <nav>
        <ul>
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
      <div>
        <button>Contacts</button>
        <button>Sign up</button>
      </div>
    </header>
  );
}
