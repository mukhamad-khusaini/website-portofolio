import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";

const mainPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[100vh] w-full bg-vectorBg bg-right bg-no-repeat flex flex-row px-24">
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
        <div></div>
      </div>
    </main>
  );
};

export default mainPage;

export const Head: HeadFC = () => {
  return <title>Beranda</title>;
};
