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
import profile from "../images/profile.png";
import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";
import MyDialog from "../components/Dialog";
import Achivement from "../components/Achivement";
import { DataAchivement, DataGallery } from "../../interface";
import ImageShow from "../components/ImageShow";

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
  const [ach, setAch]: any = useState();
  // ***

  // *** State Gallery
  const [gal, setGal]: any = useState();
  // ***

  // ** State Modal
  const [modal, setModal]: any = useState(false);
  // ***

  // ** State Image Show
  const [img, setImg]: any = useState({ bool: false, img: "" });
  // ***

  // *** Fetch Achivement
  useEffect(() => {
    const data = async () => {
      const GS = new GoogleSpreadsheet(
        "1SHDGRxH1oWOKmXAus402skv0DTO2SJR45cMWLHTl_08",
        { apiKey: process.env.KEY }
      );

      await GS.loadInfo(); // loads document properties and worksheets
      const Sheet = GS.sheetsByIndex[0];
      const rows = await Sheet.getRows({ limit: 5 });
      const dataAchivement: DataAchivement[] = [];
      rows.forEach((data) => {
        dataAchivement.push({
          event: data.get("Nama Event"),
          date: moment(data.get("Tanggal"), "DD/MM/YYYY").format("D MMMM YYYY"),
          achivement: data.get("Capaian"),
          img: data.get("Dokumentasi").split("=")[1],
        });
      });

      const length = dataAchivement.length;
      if (dataAchivement.length < 5) {
        for (let i = 0; i < 5 - length; i++) {
          dataAchivement.push({
            event: "",
            date: "",
            achivement: "",
            img: "",
            type: "img",
            key: i,
          });
        }
      }

      setAch(dataAchivement);
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
      const inf = await Sheet.getRows({ limit: 7 });
      const dataGallery: DataGallery[] = [];
      inf.forEach((data) => {
        dataGallery.push({
          imgId: data.get("Gambar").split("=")[1],
        });
      });

      const length = dataGallery.length;
      if (dataGallery.length < 7) {
        for (let i = 0; i < 7 - length; i++) {
          dataGallery.push({
            imgId: "",
            rand: Math.round(Math.random() * 10),
          });
        }
      }

      setGal(dataGallery);
    };

    data();
  }, []);
  // ***

  return (
    <main>
      <MyDialog state={modal} setState={setModal} />
      <ImageShow state={img} setState={setImg} />

      {/* Navbar */}
      <Navbar />
      {/* Introduction */}
      <section
        id="introduction"
        className="h-[100vh] lg:h-[85vh] w-full bg-vectorBg bg-right bg-no-repeat flex flex-col-reverse lg:flex-row px-24 pt-14 pb-5 lg:pb-0 items-center"
      >
        <div className="flex flex-col items-center lg:items-start justify-center w-[80%]">
          <h3 className="font-jetBrain text-lg lg:text-2xl relative hidden lg:inline-block before:block before:absolute before:-inset-x-1 before:-inset-0 before:top-4 before:bg-yld">
            <span className="relative">Describe Myself!</span>
          </h3>
          <h1 className="font-kaushan text-center lg:text-start text-2xl lg:text-4xl/[3.5rem] my-4">
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
          <div className="flex flex-col justify-center items-center gap-2 lg:block text-sm lg:text-lg">
            <span className="font-jetBrain inline-block overflow-hidden py-[2px] px-[10px] border-2 border-yld mr-0 lg:mr-5 cursor-pointer relative before:absolute before:w-4 before:h-4 before:-inset-0 before:-top-2 before:-left-2 before:rotate-45 before:bg-yld">
              Donate your money here!
            </span>
            <span className="font-jetBrain inline-block overflow-hidden py-[2px] px-[10px] border-2 border-org cursor-pointer relative before:absolute before:w-4 before:h-4 before:-inset-0 before:-top-2 before:-left-2 before:rotate-45 before:bg-org">
              Insult me here!
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[70%] mb-4 lg:mb-0">
          <img src={profile} alt="profile" className="w-[40%] lg:w-[40%] " />
          <h2 className="px-14 py-2 lg:py-3 bg-yld font-jetBrain transition-all ease-in">
            <span className="italic">Never give cars</span> 🤡
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
          <h2 className="font-kaushan text-white md:text-[1rem] lg:text-xl">
            Landing Page
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center w-[25%]">
          <img className="mr-4" src={poly} alt="." />
          <h2 className="font-kaushan text-white md:text-[1rem] lg:text-xl">
            Personal Website
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center w-[15%]">
          <img className="mr-4" src={poly} alt="." />
          <h2 className="font-kaushan text-white md:text-[1rem] lg:text-xl">
            Blog Site
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center w-[20%]">
          <img className="mr-4" src={cancel} alt="x" />
          <h2 className="font-kaushan text-white md:text-[1rem] lg:text-xl">
            Blockchain
          </h2>
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
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
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
          {ach != undefined ? (
            ach.map((data: DataAchivement) => {
              if (data.type == "img") {
                return (
                  <img
                    src={comingSoon}
                    alt="coming soon"
                    width={200}
                    key={data.key}
                  />
                );
              } else {
                return (
                  <Achivement
                    event={data.event}
                    achivement={data.achivement}
                    date={data.date}
                    img={data.img}
                    key={data.event}
                  />
                );
              }
            })
          ) : (
            <div className="w-full h-[200px] flex justify-center items-center">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
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
          {gal != undefined ? (
            gal.map((data: DataGallery, index: number) => {
              switch (index) {
                case 0:
                  return (
                    <img
                      key={Math.random()}
                      src={
                        data.imgId
                          ? "https://drive.google.com/thumbnail?id=" +
                            data.imgId +
                            "&sz=w1000"
                          : g1
                      }
                      alt="my picture"
                      className="h-[10rem] w-full object-cover col-span-4 cursor-pointer"
                      onClick={() => setImg({ bool: true, imgId: data.imgId })}
                    />
                  );

                case 1:
                  return (
                    <img
                      key={Math.random()}
                      src={
                        data.imgId
                          ? "https://drive.google.com/thumbnail?id=" +
                            data.imgId +
                            "&sz=w1000"
                          : g3
                      }
                      alt="my picture"
                      className="h-[10rem] w-full object-cover col-span-3 cursor-pointer"
                      onClick={() => setImg({ bool: true, imgId: data.imgId })}
                    />
                  );

                case 2:
                  return (
                    <img
                      key={Math.random()}
                      src={
                        data.imgId
                          ? "https://drive.google.com/thumbnail?id=" +
                            data.imgId +
                            "&sz=w1000"
                          : g4
                      }
                      alt="my picture"
                      className="h-[10rem] w-full object-cover col-span-3 cursor-pointer"
                      onClick={() => setImg({ bool: true, imgId: data.imgId })}
                    />
                  );

                case 3:
                  return (
                    <img
                      key={Math.random()}
                      src={
                        data.imgId
                          ? "https://drive.google.com/thumbnail?id=" +
                            data.imgId +
                            "&sz=w1000"
                          : g5
                      }
                      alt="my picture"
                      className="h-[10rem] w-full object-cover col-span-2 cursor-pointer"
                      onClick={() => setImg({ bool: true, imgId: data.imgId })}
                    />
                  );

                case 4:
                  return (
                    <img
                      key={Math.random()}
                      src={
                        data.imgId
                          ? "https://drive.google.com/thumbnail?id=" +
                            data.imgId +
                            "&sz=w1000"
                          : g2
                      }
                      alt="my picture"
                      className="h-[10rem] w-full object-cover col-span-3 cursor-pointer"
                      onClick={() => setImg({ bool: true, imgId: data.imgId })}
                    />
                  );

                case 5:
                  return (
                    <img
                      key={Math.random()}
                      src={
                        data.imgId
                          ? "https://drive.google.com/thumbnail?id=" +
                            data.imgId +
                            "&sz=w1000"
                          : g1
                      }
                      alt="my picture"
                      className="h-[10rem] w-full object-cover col-span-3 cursor-pointer"
                      onClick={() => setImg({ bool: true, imgId: data.imgId })}
                    />
                  );

                case 6:
                  return (
                    <img
                      key={Math.random()}
                      src={
                        data.imgId
                          ? "https://drive.google.com/thumbnail?id=" +
                            data.imgId +
                            "&sz=w1000"
                          : g4
                      }
                      alt="my picture"
                      className="h-[10rem] w-full object-cover col-span-6 cursor-pointer"
                      onClick={() => setImg({ bool: true, imgId: data.imgId })}
                    />
                  );
              }
            })
          ) : (
            <div className="col-span-12 row-span-12 flex justify-center items-center">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Footer */}
      <section className="h-[30vh] flex flex-col items-center px-24 py-10 bg-blk bg-footerBg bg-no-repeat bg-[center_top_1rem] bg-[length:70rem] gap-2">
        <h3 className="font-kaushan text-white text-xl">Social Media</h3>
        <p className="font-jetBrain text-white text-[0.7rem]">Catch Me Here!</p>
        <div className="flex flex-row items-center gap-4">
          <img
            src={fb}
            width={35}
            alt="FB"
            onClick={() => {
              location.href =
                "https://www.facebook.com/profile.php?id=100071852659180";
            }}
            className="cursor-pointer"
          />
          <img
            src={ig}
            width={35}
            alt="IG"
            className="cursor-pointer"
            onClick={() => {
              location.href = "https://www.instagram.com/khusaini.go.id/";
            }}
          />
          <img
            src={x}
            width={35}
            alt="X"
            className="cursor-pointer"
            onClick={() => {
              location.href = "https://twitter.com/mukhamad_khu";
            }}
          />
          <img
            src={gh}
            width={35}
            alt="Github"
            className="cursor-pointer"
            onClick={() => {
              location.href = "https://github.com/mukhamad-khusaini";
            }}
          />
        </div>
        <p className="font-jetBrain text-white text-[0.7rem]">
          &copy;copyright 2024 | All Right Reserved.
        </p>
      </section>
    </main>
  );
};

export default mainPage;
