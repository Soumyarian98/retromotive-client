import { nanoid } from "nanoid";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { SlArrowRightCircle } from "react-icons/sl";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "@/utils/motion";

const data = [
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/02/12100-8.jpg",
    title: "Consulier GTP lx tee",
    price: "$28.99",
  },
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/01/12100-264.jpg",
    title: "Devil z tee",
    price: "$28.99",
  },
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/02/12100-40.jpg",
    title: "Retro tee speedy rainbow",
    price: "$28.99",
  },
];

const Merchendise = () => {
  return (
    <div className="w-full min-h-screen py-[2vw] bg-stone-100">
      <div className="container flex flex-col gap-12 justify-center">
        <div className="overflow-hidden">
          <motion.h2
            variants={textVariant(0.25)}
            className="text-4xl font-extrabold text-center">
            APPAREL
          </motion.h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {data.map(item => (
            <div
              key={item.id}
              className="flex flex-col rounded-lg overflow-hidden bg-white">
              <div key={item.id} className="relative ">
                <img src={item.imageUrl} alt={item.title} />
                <div className="absolute top-4 right-4">
                  <button className="text-red-500 text-2xl">
                    <FiHeart />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex justify-between">
                  <h3 className="capitalize font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  <span className=" font-medium text-stone-700">
                    {item.price}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-filled w-full px-6 py-3 text-sm font-medium border items-center gap-3">
                  buy now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button className="uppercase">View All Collection</button>
          <SlArrowRightCircle className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Merchendise, "merchendise");
