import { Box, IconButton, IconButtonProps } from "@mui/material";
import React from "react";

interface Props extends IconButtonProps {
  bgcolor: string;
}

const CustomIconButton = ({ bgcolor, children, ...rest }: Props) => {
  return (
    <Box component="div" bgcolor={bgcolor} sx={{ borderRadius: "100%" }}>
      <IconButton {...rest}>{children}</IconButton>
    </Box>
  );
};

export default CustomIconButton;
