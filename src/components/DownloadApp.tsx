import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";

const DownloadApp = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      color="#fff"
      spacing={2}>
      <Typography>
        Read More Articles Like These Download Our Brand New App
      </Typography>
      <SlArrowRightCircle size={24} />
    </Stack>
  );
};

export default DownloadApp;
