import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";
import poly from "../images/poly.png";
import ui from "../images/ui.png";
import dev from "../images/dev.png";
import back from "../images/back.png";
import design from "../images/design.png";
import titleAch from "../images/titleAch.png";
import comingSoon from "../images/comingSoon.png";
import cancel from "../images/cancel.png";

const mainPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <section className="h-[85vh] w-full bg-vectorBg bg-right bg-no-repeat flex flex-row px-24 pt-14">
        <div className="flex flex-col items-start justify-center w-[60%]">
          <h3 className="font-jetBrain text-2xl relative inline-block before:block before:absolute before:-inset-x-1 before:-inset-0 before:top-4 before:bg-yld">
            <span className="relative">Describe Myself!</span>
          </h3>
          <h1 className="font-kaushan text-4xl/[3.5rem] my-4">
            Hello, I'm Mukhamad khusaini a front-end beginner, back-end
            beginner, college student, cat lover, spicy lover, unemployed,{" "}
            <span className="font-jetBrain text-blue-700 text-xl cursor-pointer">
              Load More &gt;&gt;
            </span>
          </h1>
          <div>
            <span className="font-jetBrain inline-block overflow-hidden py-[2px] px-[10px] border-2 border-yld mr-5 cursor-pointer relative before:absolute before:w-4 before:h-4 before:-inset-0 before:-top-2 before:-left-2 before:rotate-45 before:bg-yld">
              Donate your money here!
            </span>
            <span className="font-jetBrain inline-block overflow-hidden py-[2px] px-[10px] border-2 border-org cursor-pointer relative before:absolute before:w-4 before:h-4 before:-inset-0 before:-top-2 before:-left-2 before:rotate-45 before:bg-org">
              Insult me here!
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[40%]">
          <h2 className="px-14 py-4 bg-yld font-jetBrain italic">
            This is me btw!
          </h2>
        </div>
      </section>
      <section className="h-[15vh] bg-blk flex flex-row justify-around items-center px-8">
        <div className="flex flex-row items-center justify-center w-[20%]">
          <img className="mr-4" src={poly} alt="." />
          <h2 className="font-kaushan text-white text-xl">Landing Page</h2>
        </div>
        <div className="flex flex-row items-center justify-center w-[20%]">
          <img className="mr-4" src={poly} alt="." />
          <h2 className="font-kaushan text-white text-xl">Personal Website</h2>
        </div>
        <div className="flex flex-row items-center justify-center w-[20%]">
          <img className="mr-4" src={poly} alt="." />
          <h2 className="font-kaushan text-white text-xl">Blog Site</h2>
        </div>
        <div className="flex flex-row items-center justify-center w-[20%]">
          <img className="mr-4" src={cancel} alt="x" />
          <h2 className="font-kaushan text-white text-xl">Blockchain</h2>
        </div>
      </section>
      <section className="h-[80vh] bg-reactBg bg-right-top bg-no-repeat bg-[length:20rem] flex flex-col items-center px-24 py-10">
        <h1 className="font-kaushan text-3xl relative mb-14 before:block before:absolute before:-inset-x-3 before:-inset-y-2 before:top-5 before:bg-yld">
          <span className="relative">My Projects</span>
        </h1>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="w-[23%] h-[20rem] bg-gry border-2 border-black rounded-xl p-7 flex flex-col items-start gap-6">
            <img src={ui} alt="ui" />
            <h3 className="font-jetBrain text-xl">UI/UX Design</h3>
            <p className="font-jetBrain text-sm">
              Need a high quality UI/UX design? Contact us now!
            </p>
          </div>
          <div className="w-[23%] h-[20rem] bg-gry border-2 border-black rounded-xl p-7 flex flex-col items-start gap-6">
            <img src={dev} alt="dev" />
            <h3 className="font-jetBrain text-xl">Web Development</h3>
            <p className="font-jetBrain text-sm">
              Need a quality website? Contact us now, a professional and trusted
              web development service.
            </p>
          </div>
          <div className="w-[23%] h-[20rem] bg-gry border-2 border-black rounded-xl p-7 flex flex-col items-start gap-6">
            <img src={back} alt="back" />
            <h3 className="font-jetBrain text-xl">Back-end Development</h3>
            <p className="font-jetBrain text-sm">
              Need a Back-end Developer? Contact us now!
            </p>
          </div>
          <div className="w-[23%] h-[20rem] bg-gry border-2 border-black rounded-xl p-7 flex flex-col items-start gap-6">
            <img src={design} alt="design" />
            <h3 className="font-jetBrain text-xl">Graphic Design</h3>
            <p className="font-jetBrain text-sm">
              Need a high quality graphic design? Contact us now!
            </p>
          </div>
        </div>
      </section>
      <section className="h-[60vh] bg-blk flex flex-col items-center px-24 py-10">
        <img src={titleAch} width={200} alt="Achivement" className="mb-12" />
        <div className="flex flex-row items-center justify-center gap-6">
          <img src={comingSoon} alt="coming soon" width={200} />
          <img src={comingSoon} alt="coming soon" width={200} />
          <img src={comingSoon} alt="coming soon" width={200} />
          <img src={comingSoon} alt="coming soon" width={200} />
          <img src={comingSoon} alt="coming soon" width={200} />
        </div>
      </section>
    </main>
  );
};

export default mainPage;

export const Head: HeadFC = () => {
  return <title>Beranda</title>;
};
