import { Box } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box
      sx={{ height: { xs: "32px", md: "40px" } }}
      component="img"
      src="https://retromotive.co/wp-content/uploads/2022/03/RetroDrivingLogo.png"
    />
  );
};

export default Logo;
