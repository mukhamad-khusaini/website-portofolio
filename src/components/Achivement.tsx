import React from "react";

export default function Achivement({
  event,
  date,
  achivement,
  img,
}: {
  event: string;
  date: string;
  achivement: string;
  img?: string;
}) {
  return (
    <div className="bordered w-[200px] h-[200px] rounded-[100px] border-[4px] border-dashed border-white flex flex-col items-center overflow-hidden p-3 gap-2">
      <div className="w-full h-[50%] bg-white rounded-t-full border-4 border-white overflow-hidden flex justify-center items-center">
        <img
          src={"https://drive.google.com/thumbnail?id=" + img + "&sz=w1000"}
          alt="image"
          className="w-full"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col items-center font-jetBrain text-center text-white">
        <h3 className="font-bold text-sm text-yld">{achivement}</h3>
        <p className="text-[11px]">{event}</p>
        <p className="text-[11px]">{date}</p>
      </div>
    </div>
  );
}
