import * as React from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="w-full absolute flex flex-row align-middle justify-center lg:justify-between py-5 px-10">
        <div className="w-[20%] flex items-center lg:justify-start">
          <img width={100} src={logo} alt="logo" />
        </div>
        <div className="w-[70%] hidden lg:flex flex-row justify-around items-center font-jetBrain">
          <p
            className="cursor-pointer select-none"
            onClick={() =>
              document.getElementById("introduction")?.scrollIntoView()
            }
          >
            Intro
          </p>
          <p
            className="cursor-pointer select-none"
            onClick={() => document.getElementById("skill")?.scrollIntoView()}
          >
            Skills
          </p>
          <p
            className="cursor-pointer select-none"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView()
            }
          >
            Projects
          </p>
          <p
            className="cursor-pointer select-none"
            onClick={() =>
              document.getElementById("achivement")?.scrollIntoView()
            }
          >
            Achivement
          </p>
          <p
            className="cursor-pointer select-none"
            onClick={() => document.getElementById("gallery")?.scrollIntoView()}
          >
            Gallery
          </p>
          <a
            className="bg-yld px-3 py-1 rounded-t-xl select-none"
            href="https://wa.me/6488802791094"
          >
            Catch Me!
          </a>
        </div>
      </nav>
    </>
  );
}
