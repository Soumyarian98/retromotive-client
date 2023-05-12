import { nanoid } from "nanoid";
import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const data = [
  {
    id: nanoid(),
    title: "Aviator Game Jogo Online, Avião Para Ganhar Dinheiro",
    image: "/car6.jpg",
  },
  {
    id: nanoid(),
    title: "1Win App Download For Android Apk And Ios For Iphone 2023",
    image: "/car7.jpg",
  },
  {
    id: nanoid(),
    title: "1Win App Review App For Online Betting And Casino Games In India",
    image: "/car8.jpg",
  },
];

const Articles = () => {
  return (
    <div className="w-full flex flex-col gap-12 container justify-center py-[2vw]">
      <motion.h2
        variants={textVariant(0.25)}
        className="text-4xl font-extrabold text-center">
        ARTICLES
      </motion.h2>
      <div className="grid grid-cols-3 gap-8">
        {data.map(item => {
          return (
            <Tilt key={item.id}>
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <img src={item.image} className="w-full h-auto" />
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
                  }}
                  className="w-full p-6 shadow-md flex flex-col items-center gap-4 bottom-0 absolute">
                  <p className="text-2xl text-center text-white">
                    {item.title}
                  </p>
                  <button
                    type="button"
                    className="uppercase text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">
                    Read Article
                  </button>
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
      <div className="flex gap-2 items-center justify-center">
        <button className="uppercase">View All Article</button>
        <SlArrowRightCircle className="text-3xl" />
      </div>
    </div>
  );
};

export default SectionWrapper(Articles, "articles");
