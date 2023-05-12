import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";

const DownloadApp = () => {
  return (
    <div className="bg-black px-[10vw] py-[2vw] flex gap-4 justify-center items-center text-white">
      <p className="uppercase">
        Read More Articles Like These Download Our Brand New App
      </p>
      <SlArrowRightCircle className="text-3xl" />
    </div>
  );
};

export default DownloadApp;
