import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

// import IntroOverlay from "./IntroOverlay";
import BannerMain from "./BannerMain";
import BannerItems from "./BannerItems";

import { introAnimation } from "./intro-animation";

let initial = false;
const HomeBanner = ({ bannerTitle, bannerImages }: any) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimFunc = () => {
    setAnimationComplete(!animationComplete);
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    if (!initial) {
      initial = true;
      introAnimation(completeAnimFunc);
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {/* <IntroOverlay /> */}
      <BannerMain bannerTitle={bannerTitle} />
      <BannerItems bannerImages={bannerImages} />
    </Box>
  );
};

export default HomeBanner;
