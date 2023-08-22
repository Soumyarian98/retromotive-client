import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { nanoid } from "nanoid";
import { Button, Container } from "@mui/material";
import CarouselControls from "./CarouselControls";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

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

const DataCarousel = ({ carousel }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % carousel.length);
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
              <div
                key={carousel[index]._key}
                className="w-full md:w-8/12 h-[300px]">
                <div className="overflow-hidden">
                  <motion.h2
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="font-bold text-[1.5rem]">
                    {carousel[index].title}
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="mt-4">
                    {carousel[index].description}
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
                      {carousel[index].actionButtonName}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </AnimatePresence>
          </div>
          <div>
            <AnimatePresence mode="wait">
              {carousel.map((d: any, i: any) => {
                if (i !== index) return null;
                const url = sanityUrlBuiler(d.featuredImage).width(500).url();
                console.log(url);
                return (
                  <motion.div
                    key={d._key}
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
                    <img src={url} className="w-full height-auto" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <CarouselControls
          numberOfSlides={carousel.length}
          activeIndex={index}
          changeIndex={p => {
            p === 1
              ? setIndex(p => (p === carousel.length - 1 ? 0 : p + 1))
              : setIndex(p => (p === 0 ? carousel.length - 1 : p - 1));
          }}
        />
      </div>
    </Container>
  );
};

export default DataCarousel;
