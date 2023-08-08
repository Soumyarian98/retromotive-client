import { useScrollTrigger } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: trigger ? { bgcolor: "#fff" } : { bgcolor: "#fcfcfc" },
  });
};

export default ElevationScroll;
