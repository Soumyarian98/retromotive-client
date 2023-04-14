import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import ImageGallery from "@/components/ImageGallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const columnControl = useAnimationControls();
  const conatinerControl = useAnimationControls();

  useEffect(() => {
    (async () => {
      await columnControl.start({
        height: "100%",
        transition: { duration: 2.5, ease: "easeInOut" },
        y: 0,
      });
      await conatinerControl.start({
        scale: 1,
        transition: { duration: 2, ease: "easeInOut" },
      });
      await conatinerControl.start({
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      });
      await conatinerControl.start({
        display: "none",
      });
    })();
  }, []);

  return (
    <>
      {/* <motion.div
        initial={{ scale: 0.23 }}
        animate={conatinerControl}
        className="fixed inset-0 flex justify-center items-center scale-[0.23] z-20 bg-black">
        <div className="h-[600vh] flex items-stretch gap-20">
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnControl}
              className="height-[350%] flex-none flex flex-col justify-between items-stretch">
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col justify-end">
            <motion.div
              initial={{ height: "350%", y: "-40%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <motion.img
                  initial={{ scale: 1.5 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 2, delay: 2.5 },
                  }}
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col justify-end">
            <motion.div
              initial={{ height: "350%", y: "-40%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ height: "350%", y: "70%" }}
              animate={columnControl}
              className="h-[350%] flex-none flex flex-col justify-between items-stretch">
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-screen h-screen overflow-hidden relative">
                <img
                  src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div> */}

      <div className="relative w-screen h-screen">
        <ImageGallery />
      </div>
    </>
  );
}
