import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex justify-between">
          <div className=" flex flex-col justify-between">
            <h2 className="title">Don’t Miss a Thing</h2>
            <p className="text-lg  mb-8">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <input
              className="w-full px-8 py-5 border border-black rounded-full"
              type="email"
              placeholder="Enter email address for newsletter ..."
              name="newsletter"
            ></input>
          </div>
          <div>
            <nav className="text-lg grid grid-cols-3 mb-14 gap-10">
              <ul>
                <li className="text-2xl mb-5">Quick Link</li>
                <li>About us</li>
                <li>Who we are</li>
                <li>Contact Us</li>
              </ul>
              <ul>
                <li className="text-2xl mb-5">The Cars</li>
                <li>How it works</li>
                <li>Pick a car</li>
                <li>FAQs</li>
              </ul>
              <ul>
                <li className="text-2xl mb-5">Social Media</li>
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
