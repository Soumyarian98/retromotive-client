import Articles from "@/components/Articles";
import DataCarousel from "@/components/DataCarousel";
import DownloadApp from "@/components/DownloadApp";
import HomePage from "@/components/HomePage";
import MagazineGrid from "@/components/MagazineGrid";
import Merchendise from "@/components/Merchendise";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const imageUrls = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
];

export default function Home() {
  const columnControl = useAnimationControls();
  const conatinerControl = useAnimationControls();
  const contentControl = useAnimationControls();

  useEffect(() => {
    (async () => {
      await columnControl.start({
        height: "100%",
        transition: { duration: 2.5, ease: "easeInOut" },
        y: 0,
      });
      await conatinerControl.start({
        scale: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
      await contentControl.start({
        opacity: 1,
        display: "block",
        transition: { ease: "easeInOut", duration: 1.5 },
      });
      await conatinerControl.start({
        opacity: 0,

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
              initial={{ scale: 2 }}
              animate={{
                scale: 1,
                transition: { duration: 1.5, delay: 2.5 },
              }}
              src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V18-Pre-Order1-1.jpg"
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
    <main>
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
      <motion.div
        initial={{ display: "none", opacity: 0 }}
        animate={contentControl}>
        <HomePage />
        <DataCarousel />
        <MagazineGrid />
        <Articles />
        <Merchendise />
        <DownloadApp />
      </motion.div>
    </main>
  );
}
