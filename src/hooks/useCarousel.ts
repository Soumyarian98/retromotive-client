import React from "react";

const useCarousel = (maxStep: number) => {
  const [index, setIndex] = React.useState(0);

  const next = () => {
    setIndex(p => {
      const nextIndex = p + 1;
      return nextIndex % maxStep;
    });
  };

  const prev = () => {
    setIndex(p => {
      const nextIndex = p - 1;
      return nextIndex % maxStep;
    });
  };

  return {
    index,
    next,
    prev,
  };
};

export default useCarousel;
