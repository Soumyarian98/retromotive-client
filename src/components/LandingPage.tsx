import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { SlArrowRightCircle } from "react-icons/sl";
import DataCarousel from "./DataCarousel";

const imageUrls = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
];

const LandingPage = () => {
  const columnControl = useAnimationControls();
  const conatinerControl = useAnimationControls();
  const scrollConatinerControl = useAnimationControls();
  const scrollContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    (async () => {
      await columnControl.start({
        height: "100%",
        transition: { duration: 2.5, ease: "easeInOut" },
        y: 0,
      });
      await conatinerControl.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
      await conatinerControl.start({
        display: "none",
      });
    })();
  }, []);

  const getImages = (index: number) => {
    return new Array(5).fill(0).map((_, i) => {
      return (
        <div key={i} className="w-screen h-screen overflow-hidden relative">
          {index === 2 && i === 2 ? (
            <motion.img
              initial={{ scale: 1.5 }}
              animate={{
                scale: 1,
                transition: { duration: 2, delay: 2.5 },
              }}
              src={imageUrls[i]}
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={imageUrls[i]} className="w-full h-full object-cover" />
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <motion.div
        initial={{ scale: 0.23 }}
        animate={conatinerControl}
        className="fixed inset-0 flex justify-center items-center scale-[0.23] z-20">
        <div className="h-[600vh] flex items-stretch gap-20">
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnControl}
              className="height-[350%] flex-none flex flex-col justify-between items-stretch">
              {getImages(0)}
            </motion.div>
          </div>
          <div className="flex flex-col justify-end">
            <motion.div
              initial={{ height: "350%", y: "-40%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              {getImages(1)}
            </motion.div>
          </div>
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              {getImages(2)}
            </motion.div>
          </div>
          <div className="flex flex-col justify-end">
            <motion.div
              initial={{ height: "350%", y: "-40%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              {getImages(3)}
            </motion.div>
          </div>
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              {getImages(4)}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;

{
  /* <div className="w-screen h-screen overflow-hidden">
  <main ref={scrollContainer}>
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={scrollConatinerControl}
      id="grid">
      <div className="grid grid-cols-3 gap-8">
        {new Array(3).fill(0).map((_, i) => {
          return (
            <div
              className="flex flex-col gap-8"
              data-scroll
              data-scroll-speed={i % 2 === 0 ? "1" : "-1"}
              data-scroll-target="#grid">
              {new Array(5).fill(0).map((_, i) => {
                return (
                  <div key={i} className="w-full h-auto overflow-hidden">
                    <motion.img
                      whileHover={{
                        scale: 1.5,
                        transition: { duration: 2, ease: "easeInOut" },
                      }}
                      src={imageUrls[i]}
                      className="object-contain w-full"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </motion.section>
  </main>
</div>; */
}
