import * as React from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full absolute flex flex-row align-middle justify-between py-5 px-10">
      <div className="w-[20%] flex items-center justify-start">
        <img width={100} src={logo} alt="logo" />
      </div>
      <div className="w-[70%] flex flex-row justify-around items-center font-jetBrain">
        <p>Intro</p>
        <p>Portfolios</p>
        <p>Achivement</p>
        <p>Testimonials</p>
        <p>Socials</p>
        <a className="bg-yld px-3 py-1 rounded-t-xl" href="/">
          Catch Me!
        </a>
      </div>
    </nav>
  );
}
