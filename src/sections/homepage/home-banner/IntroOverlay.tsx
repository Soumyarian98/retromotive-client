const IntroOverlay = () => {
  return (
    <div className="intro-overlay">
      <div className="absolute w-full z-20 top-overlay-height left-0 right-0">
        <div className="overlay-top absolute h-full w-full md:w-1/3 bg-black bottom-0"></div>
        <div className="hidden md:block overlay-top absolute h-full w-full md:w-1/3 bg-black bottom-0 left-1/3 right-0"></div>
        <div className="hidden md:block overlay-top absolute h-full w-full md:w-1/3 bg-black bottom-0 left-2/3 right-0"></div>
      </div>
      <div className="main absolute bottom-0 w-full z-20">
        <div className="overlay-bottom absolute w-full md:w-[33.333vw] h-full bg-black bottom-0 right-0 md:right-[66.666vw]"></div>
        <div className="hidden md:block overlay-bottom absolute w-full md:w-[33.333vw] h-full bg-black bottom-0 right-[33.333vw]"></div>
        <div className="hidden md:block overlay-bottom absolute w-full md:w-[33.333vw] h-full bg-black bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default IntroOverlay;
