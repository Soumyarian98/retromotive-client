import { nanoid } from "nanoid";
import React from "react";
import { FiBookOpen, FiChevronRight } from "react-icons/fi";
import { SlArrowRightCircle } from "react-icons/sl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const data = [
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/07/COVERS1-large.jpg",
    title: "Volume 15",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/03/COVERS1-1-1024x1024.jpg",
    title: "Volume 16",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/COVERS1-large.jpg",
    title: "Volume 18",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/03/COVERS1_Grey-1024x1024.jpg",
    title: "Volume 19",
    date: "March 2020 - April 2021",
  },
];

const MagazineGrid = () => {
  return (
    <div className="min-h-screen px-[10vw] py-[2vw] bg-stone-100">
      <div className="container flex flex-col justify-center gap-12">
        <motion.h2
          className="text-4xl font-extrabold text-center"
          variants={textVariant(0.5)}>
          QUARTERLIES
        </motion.h2>
        <VerticalTimeline>
          {data.map(item => {
            return (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
                icon={<FiBookOpen />}
                className="vertical-timeline-element--work">
                <div className="space-y-4">
                  <h3 className="text-lg uppercase font-bold">{item.title}</h3>
                  <div key={item.id} className="relative">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-xl">$ 29.99</span>
                    <button
                      type="button"
                      className="uppercase text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 ">
                      Add to cart
                    </button>
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
        <div className="flex gap-2 items-center justify-center">
          <button className="uppercase">View All Magazine</button>
          <SlArrowRightCircle className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(MagazineGrid, "magazine-grid");
