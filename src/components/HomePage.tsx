import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const data = [
  {
    id: nanoid(),
    imageUrl:
      "https://retromotive.co/wp-content/uploads/2022/04/herobanner-V18-Pre-Order1-1.jpg",
    title: "Say Hello To V8",
    subtitle: "Pre-Order Now",
    buttonTitle: "Subscribe Now",
  },

  {
    id: nanoid(),
    imageUrl:
      "https://retromotive.co/wp-content/uploads/2022/04/herobanner-App2.jpg",
    title: "Say Hello To V8",
    subtitle: "Pre-Order Now",
    buttonTitle: "Subscribe Now",
  },
  {
    id: nanoid(),
    imageUrl:
      "https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg",
    title: "Say Hello To V8",
    subtitle: "Pre-Order Now",
    buttonTitle: "Subscribe Now",
  },
];

let initialRender = true;
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        initialRender = false;
        setCurrentSlide(prev => {
          if (prev === data.length - 1) return 0;
          return prev + 1;
        });
      },
      initialRender ? 10000 : 5000
    );
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <Box component="div" sx={{ height: "100vh", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        {data.map((item, index) => {
          if (index !== currentSlide) return null;
          return (
            <Box
              component="div"
              sx={{ position: "relative", height: "100%" }}
              key={item.id}>
              <Box
                component={motion.img}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                src={item.imageUrl}
                alt={item.id}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center p-12">
                <h1 className="text-6xl font-extrabold text-white">
                  {item.title}
                </h1>
                <p>{item.subtitle}</p>
                <button className="btn-filled">{item.buttonTitle}</button>
              </div> */}
            </Box>
          );
        })}
      </AnimatePresence>
    </Box>
  );
};

export default HomePage;

// useEffect(() => {
//   displacementMap.current?.setAttribute("scale", "40");
// }, [currentSlide]);

{
  /* <svg className="absolute">
  <defs>
    <filter id="mask">
      <feTurbulence
        baseFrequency="0.9,0.9"
        seed="500"
        type="fractalNoise"
        result="static"
      />
      <feDisplacementMap in="SourceGraphic" in2="static" ref={displacementMap}>
        <motion.animate
          attributeName="scale"
          animate={{ values: "0;40;0" }}
          dur="400ms"
          repeatCount="1"
        />
      </feDisplacementMap>
    </filter>
  </defs>
</svg>; */
}
