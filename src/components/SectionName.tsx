import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  sectionIndex: number;
  sectionName: string;
}

const SectionName = ({ sectionIndex, sectionName }: Props) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        component="strong"
        sx={{ mixBlendMode: "difference" }}
        color="#fff">
        {sectionIndex}
      </Typography>
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "100px",
          width: "70%",
          height: "1px",
          minWidth: "10px",
          margin: "10px",
        }}>
        <Box
          component="i"
          sx={{
            border: 1,
            borderColor: t => t.palette.secondary.main,
            width: "100%",
          }}
        />
      </Box>
      <Typography
        component="strong"
        sx={{ mixBlendMode: "difference" }}
        color="#fff">
        {sectionName}
      </Typography>
    </Stack>
  );
};

export default SectionName;
