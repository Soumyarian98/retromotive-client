import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SlArrowRightCircle } from "react-icons/sl";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { nanoid } from "nanoid";
import { Container } from "@mui/material";

const variant = {
  initial: { y: "200%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
  exit: {
    y: "-200%",
    opacity: 0,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

const data = [
  {
    id: nanoid(),
    title: "Never Miss A Drive. Subscribe To Retromotive Today.",
    description:
      "Join the Retromotive squad and enjoy the best automotive content right to your mailbox.",
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18ANNUAL_1.jpg",
    button: "Subscribe Now",
  },
  {
    id: nanoid(),
    title: "Download The App To Read New Articles Uploaded Weekly.",
    description:
      "Retromotive’s brand-new app update is the perfect place for petrolheads! With a 12-month digital subscription, you have full access to the app.",
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18DIGITAL_1.jpg",
    button: "Download Now",
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const DataCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <Container ref={containerRef}>
      <div className="container min-h-screen flex flex-col justify-center gap-8 py-[2vw]">
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="w-full h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {data.map((item, i) => {
                if (i !== index) return null;
                return (
                  <div key={item.id} className="w-8/12">
                    <div className="overflow-hidden">
                      <motion.h2
                        variants={variant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="font-bold text-[1.5rem]">
                        {item.title}
                      </motion.h2>
                    </div>
                    <div className="overflow-hidden">
                      <motion.p
                        variants={variant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mt-4">
                        {item.description}
                      </motion.p>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        variants={variant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex gap-2 items-center mt-12">
                        <button className="uppercase">{item.button}</button>
                        <SlArrowRightCircle className="text-3xl" />
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
          <div>
            <AnimatePresence mode="wait">
              {data.map((d, i) => {
                if (i !== index) return null;
                return (
                  <motion.div
                    key={d.id}
                    initial={{
                      WebkitMaskImage: hiddenMask,
                      maskImage: hiddenMask,
                    }}
                    animate={{
                      WebkitMaskImage: visibleMask,
                      maskImage: visibleMask,
                      transition: { duration: 0.75, ease: "easeInOut" },
                    }}
                    exit={{
                      WebkitMaskImage: hiddenMask,
                      maskImage: hiddenMask,
                      transition: { duration: 0.75, ease: "easeInOut" },
                    }}>
                    <img src={d.image} className="w-full height-auto" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div>
            <button
              className="rounded-full text-3xl"
              onClick={() =>
                setIndex(p => (p === 0 ? data.length - 1 : p - 1))
              }>
              <FiChevronLeft />
            </button>
          </div>
          <div className="flex justify-center gap-4">
            {data.map((_, i) => (
              <button
                key={nanoid()}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full ${
                  i === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div>
            <button
              className="rounded-full text-3xl"
              onClick={() =>
                setIndex(p => (p === data.length - 1 ? 0 : p + 1))
              }>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DataCarousel;
