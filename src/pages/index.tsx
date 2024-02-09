import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";
import cancel from "../images/cancel.png";
import poly from "../images/poly.png";
import ui from "../images/ui.png";
import dev from "../images/dev.png";
import back from "../images/back.png";
import design from "../images/design.png";
import titleAch from "../images/titleAch.png";
import comingSoon from "../images/comingSoon.png";
import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import x from "../images/x.png";
import gh from "../images/gh.png";
import { GoogleSpreadsheet } from "google-spreadsheet";
import MyDialog from "../components/Dialog";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KEY: string; // replace 'MY_ENV_VAR' with your variable
      // Add as many variables as needed
    }
  }
}

export const Head: HeadFC = () => {
  return <title>Website Portofolio | Mukhamad Khusaini</title>;
};

const mainPage: React.FC<PageProps> = () => {
  // *** State Achivement
  const [ach, setAch]: any = useState([]);
  // ***

  // *** State Gallery
  const [gal, setGal]: any = useState([]);
  // ***

  // ** State modal
  const [modal, setModal]: any = useState(false);
  // ***

  // *** Fetch Achivement
  useEffect(() => {
    const data = async () => {
      const GS = new GoogleSpreadsheet(
        "1ieMf4t6JGERMdQb9nbluKehaNOixu0zI4ZC_YIInIIc",
        { apiKey: process.env.KEY }
      );

      await GS.loadInfo(); // loads document properties and worksheets
      const Sheet = GS.sheetsByIndex[0];
      const rows = await Sheet.getRows();
      setAch(rows[0]);
    };

    data();
  }, []);
  // ***

  // *** Fetch Gallery
  useEffect(() => {
    const data = async () => {
      const GS = new GoogleSpreadsheet(
        "1afgYlFQLcdNMTnOuBU1bEW9_KAAipaEcb5ORAFrtSqA",
        { apiKey: process.env.KEY }
      );

      await GS.loadInfo(); // loads document properties and worksheets
      const Sheet = GS.sheetsByIndex[0];
      const inf = await Sheet.getRows();
    };

    data();
  }, []);
  // ***

  return (
    <main>
      <MyDialog state={modal} setState={setModal} />
      {/* Navbar */}
      <Navbar />
      {/* Introduction */}
      <section
        id="introduction"
        className="h-[85vh] w-full bg-vectorBg bg-right bg-no-repeat flex flex-row px-24 pt-14"
      >
        <div className="flex flex-col items-start justify-center w-[60%]">
          <h3 className="font-jetBrain text-2xl relative inline-block before:block before:absolute before:-inset-x-1 before:-inset-0 before:top-4 before:bg-yld">
            <span className="relative">Describe Myself!</span>
          </h3>
          <h1 className="font-kaushan text-4xl/[3.5rem] my-4">
            Hello, I'm Mukhamad khusaini a front-end beginner, back-end
            beginner, college student, cat lover, spicy lover, unemployed,{" "}
            <span
              className="font-jetBrain text-blue-700 text-xl cursor-pointer"
              onClick={() => {
                setModal(true);
              }}
            >
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
      {/* Skill */}
      <section
        id="skill"
        className="h-[15vh] bg-blk flex flex-row justify-around items-center px-8"
      >
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
      {/* My Projects */}
      <section
        id="projects"
        className="h-[80vh] bg-reactBg bg-right-top bg-no-repeat bg-[length:20rem] flex flex-col items-center px-24 py-10"
      >
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
      {/* Achivement */}
      <section
        id="achivement"
        className="h-[60vh] bg-blk flex flex-col items-center px-24 py-10"
      >
        <img src={titleAch} width={200} alt="Achivement" className="mb-12" />
        <div className="flex flex-row items-center justify-center gap-6">
          <div className="bordered w-[200px] h-[200px] rounded-[100px] border-[4px] border-dashed border-white flex flex-col items-center overflow-hidden p-3 gap-2">
            <div className="w-full h-[50%] bg-white rounded-t-full border-4 border-white overflow-hidden">
              <img src={g2} alt="image" className="w-full" />
            </div>
            <div className="flex flex-col items-center font-jetBrain text-center text-white">
              <h3 className="font-bold text-sm text-yld">Juara 3</h3>
              <p className="text-[11px]">UNY National Innovation 2023</p>
            </div>
          </div>
          <img src={comingSoon} alt="coming soon" width={200} />
          {/* <img src={comingSoon} alt="coming soon" width={200} />
          <img src={comingSoon} alt="coming soon" width={200} />
          <img src={comingSoon} alt="coming soon" width={200} />
          <img src={comingSoon} alt="coming soon" width={200} /> */}
        </div>
      </section>
      {/* My Gallery */}
      <section
        id="gallery"
        className="h-[80vh] flex flex-col items-center px-24 py-10"
      >
        <h1 className="font-kaushan text-3xl relative mb-14 before:block before:absolute before:-inset-x-3 before:-inset-y-2 before:top-5 before:bg-yld">
          <span className="relative">My Gallery</span>
        </h1>
        <div className="grid grid-cols-12 items-stretch gap-4">
          <img
            src={g2}
            alt="my picture"
            className="h-[10rem] w-full object-cover col-span-4"
          />
          <img
            src={g5}
            alt="my picture"
            className="h-[10rem] w-full object-cover col-span-3"
          />
          <img
            src={g1}
            alt="my picture"
            className="h-[10rem] w-full object-cover col-span-3"
          />
          <img
            src={g3}
            alt="my picture"
            className="h-[10rem] w-full object-cover col-span-2"
          />
          <img
            src={g4}
            alt="my picture"
            className="h-[10rem] w-full object-cover col-span-3"
          />
          <img
            src={g1}
            alt="my picture"
            className="h-[10rem] w-full object-cover col-span-3"
          />
          <img
            src={g2}
            alt="my picture"
            className="h-[10rem] w-full object-cover col-span-6"
          />
        </div>
      </section>
      {/* Footer */}
      <section className="h-[30vh] flex flex-col items-center px-24 py-10 bg-blk bg-footerBg bg-no-repeat bg-[center_top_1rem] bg-[length:70rem] gap-2">
        <h3 className="font-kaushan text-white text-xl">Social Media</h3>
        <p className="font-jetBrain text-white text-[0.7rem]">Catch Me Here!</p>
        <div className="flex flex-row items-center gap-4">
          <img src={fb} width={35} alt="FB" />
          <img src={ig} width={35} alt="IG" />
          <img src={x} width={35} alt="X" />
          <img src={gh} width={35} alt="Github" />
        </div>
        <p className="font-jetBrain text-white text-[0.7rem]">
          &copy;copyright 2024 | All Right Reserved.
        </p>
      </section>
    </main>
  );
};

export default mainPage;
