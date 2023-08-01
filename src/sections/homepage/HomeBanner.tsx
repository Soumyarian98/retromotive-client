import {
  Box,
  Card,
  CardContent,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { nanoid } from "nanoid";
import React from "react";
import Carousel from "react-multi-carousel";

const data = [
  {
    id: nanoid(),
    imageUrl: {
      xs: "https://retromotive.co/wp-content/uploads/2022/04/herobanner-V18-Pre-Order-mobile1.jpg",
      md: "https://retromotive.co/wp-content/uploads/2022/04/herobanner-V18-Pre-Order1-1.jpg",
    },
    title: "Say Hello To V8",
    subtitle: "Pre-Order Now",
    buttonTitle: "Subscribe Now",
  },

  {
    id: nanoid(),
    imageUrl: {
      xs: "https://retromotive.co/wp-content/uploads/2022/04/herobanner-V19-Pre-Order-mobile1.jpg",
      md: "https://retromotive.co/wp-content/uploads/2022/04/herobanner-App2.jpg",
    },

    title: "Say Hello To V8",
    subtitle: "Pre-Order Now",
    buttonTitle: "Subscribe Now",
  },
  {
    id: nanoid(),
    imageUrl: {
      xs: "https://retromotive.co/wp-content/uploads/2022/04/herobanner-V19-Pre-Order-mobile1.jpg",
      md: "https://retromotive.co/wp-content/uploads/2022/04/herobanner-V171.jpg",
    },

    title: "Say Hello To V8",
    subtitle: "Pre-Order Now",
    buttonTitle: "Subscribe Now",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeBanner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ width: "100%" }}>
      <Carousel responsive={responsive} infinite>
        {data.map(item => (
          <div key={item.id}>
            <Box
              component="img"
              src={matches ? item.imageUrl.xs : item.imageUrl.md}
              alt={item.title}
              sx={{ width: "100%" }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeBanner;
