import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { nanoid } from "nanoid";
import { Button, Container } from "@mui/material";
import CarouselControls from "./CarouselControls";

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
      <div className="container min-h-screen flex flex-col justify-center gap-8">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 w-full">
          <div className="w-full h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <div key={data[index].id} className="w-full md:w-8/12 h-[300px]">
                <div className="overflow-hidden">
                  <motion.h2
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="font-bold text-[1.5rem]">
                    {data[index].title}
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="mt-4">
                    {data[index].description}
                  </motion.p>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="mt-8">
                    <Button variant="contained" size="large">
                      {data[index].button}
                    </Button>
                  </motion.div>
                </div>
              </div>
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
        <CarouselControls
          numberOfSlides={data.length}
          activeIndex={index}
          changeIndex={p => {
            p === 1
              ? setIndex(p => (p === data.length - 1 ? 0 : p + 1))
              : setIndex(p => (p === 0 ? data.length - 1 : p - 1));
          }}
        />
      </div>
    </Container>
  );
};

export default DataCarousel;
