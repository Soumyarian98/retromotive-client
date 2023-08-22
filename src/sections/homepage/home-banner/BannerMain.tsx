import { Box, Button, Container, Stack } from "@mui/material";
import { FiArrowRightCircle } from "react-icons/fi";

const BannerMain = ({ bannerTitle }: any) => {
  return (
    <Stack justifyContent="center" position="relative" className="main">
      <Container className="h-full">
        <Stack justifyContent="center" height="100%">
          <h2 className="text-[1.7rem] leading-[2.2rem] md:text-[2.4rem] md:leading-[3rem] xl:text-[2.7rem] font-bold text-white mix-blend-difference mt-[72px] z-50">
            <div className="line h-8 md:h-12 xl:h-14 relative overflow-hidden mb-2">
              <span className="absolute z-50">{bannerTitle.lineOne}</span>
            </div>
            <div className="line h-8 md:h-12 xl:h-14 relative overflow-hidden mb-2">
              <span className="absolute z-50">{bannerTitle.lineTwo}</span>
            </div>
          </h2>
          <div className="flex s">
            <Button
              variant="contained"
              size="large"
              endIcon={<FiArrowRightCircle />}>
              More About Us
            </Button>
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};
export default BannerMain;
