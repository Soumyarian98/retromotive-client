import { Button, IconButton, MobileStepper } from "@mui/material";
import React, { FC } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  numberOfSlides: number;
  activeIndex: number;
  changeIndex: (payload: 1 | -1) => void;
}

const CarouselControls: FC<Props> = ({
  activeIndex,
  changeIndex,
  numberOfSlides,
}) => {
  const handleNext = () => {
    changeIndex(1);
  };
  const handleBack = () => {
    changeIndex(-1);
  };
  return (
    <MobileStepper
      variant="dots"
      steps={numberOfSlides}
      position="static"
      activeStep={activeIndex}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button endIcon={<FiChevronRight />} onClick={handleNext}>
          Next
        </Button>
      }
      backButton={
        <Button startIcon={<FiChevronLeft />} onClick={handleBack}>
          Back
        </Button>
      }
    />
  );
};

export default CarouselControls;
