import Articles from "@/components/Articles";
import DataCarousel from "@/components/DataCarousel";
import DownloadApp from "@/components/DownloadApp";
import ExploreCars from "@/components/ExploreCars";
import HomePage from "@/components/HomePage";
import MagazineGrid from "@/components/MagazineGrid";
import Merchendise from "@/components/Merchendise";
import Navbar from "@/components/Navbar";
import MagazineSubscription from "@/sections/homepage/MagazineSubscription";
import { Box, Stack } from "@mui/material";
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
        <Box
          component="div"
          key={i}
          sx={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}>
          {index === 2 && i === 2 ? (
            <Box
              component={motion.img}
              src="https://retromotive.co/wp-content/uploads/2022/04/herobanner-V18-Pre-Order1-1.jpg"
              initial={{ scale: 2 }}
              animate={{
                scale: 1,
                transition: { duration: 1.5, delay: 2.5 },
              }}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Box
              component="img"
              src={imageUrls[i]}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </Box>
      );
    });
  };

  return (
    <main style={{ minHeight: "200vh" }}>
      <Box
        component={motion.div}
        initial={{ scale: 0.23 }}
        animate={conatinerControl}
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "scale(0.23)",
        }}>
        <Box
          component="div"
          sx={{
            height: "600vh",
            display: "flex",
            alignItems: "stretch",
            gap: "80px",
          }}>
          {new Array(5).fill(0).map((_, i) => {
            return (
              <Stack
                key={i}
                justifyContent={i % 2 === 0 ? "flex-start" : "flex-end"}>
                <Stack
                  component={motion.div}
                  initial={{ height: "350%", y: i % 2 === 0 ? "70%" : "-40%" }}
                  animate={columnControl}
                  sx={{
                    height: "350%",
                    flex: "none",
                  }}
                  justifyContent="space-between"
                  alignItems="stretch">
                  {getImages(i)}
                </Stack>
              </Stack>
            );
          })}
        </Box>
      </Box>
      <motion.div
        initial={{ display: "none", opacity: 0 }}
        animate={contentControl}>
        <Navbar />
        <HomePage />
        <ExploreCars />
        <DataCarousel />
        <MagazineGrid />
        <Articles />
        <Merchendise />
        <MagazineSubscription />

        {/*
       
        <Merchendise />
        <DownloadApp /> */}
      </motion.div>
    </main>
  );
}
