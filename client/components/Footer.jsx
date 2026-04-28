import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <h2 className="title">Don’t Miss a Thing</h2>
            <p className="mb-8 text-lg">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <input
              className="w-full rounded-full border border-black px-8 py-5"
              type="email"
              placeholder="Enter email address for newsletter ..."
              name="newsletter"
            ></input>
          </div>
          <div>
            <nav className="mb-14 grid grid-cols-3 gap-10 text-lg">
              <ul>
                <li className="mb-5 text-2xl">Quick Link</li>
                <li>About us</li>
                <li>Who we are</li>
                <li>Contact Us</li>
              </ul>
              <ul>
                <li className="mb-5 text-2xl">The Cars</li>
                <li>How it works</li>
                <li>Pick a car</li>
                <li>FAQs</li>
              </ul>
              <ul>
                <li className="mb-5 text-2xl">Social Media</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </nav>
            <span>Copyright © 2023 GoCar. All rights reserved.</span>
          </div>
          {/* <button>
            <img src="#" alt="" />
          </button> */}
        </div>
      </footer>
    </>
  );
}
