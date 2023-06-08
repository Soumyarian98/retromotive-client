import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import SectionName from "../SectionName";
import HotSpotImage from "./HotSpotImage";

const CarSummery = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", py: 10 }}>
      <Stack alignItems="center" mb={4}>
        <div>
          <SectionName sectionIndex={5} sectionName="Summery" />
          <Typography
            variant="h4"
            fontWeight={800}
            textTransform="uppercase"
            sx={{ mt: 0.5 }}>
            Summery
          </Typography>
        </div>
      </Stack>
      <Typography fontSize="18px">
        This Porsche <mark>911 Turbo is a sought-after 997.2-era</mark> sports
        car, with an appealing specification and blistering pace. Due in part to
        the financial crisis of the time, just 3,301 examples of the 997.2 Turbo
        coupe were built, with just 53 units delivered to Australia – making
        this a very rare find in the market. Now benefitting from a
        comprehensive service history, it would make an exciting B-road toy for
        a keen driver, or a solid addition to a collection.
      </Typography>
      <Typography mt={3} fontSize="18px">
        The description of this auction lot is, to the best of the seller's
        knowledge, accurate and not misleading. Collecting Cars requests a range
        of detail about the lot from the seller, and
        <mark>performs a level of due diligence.</mark> However, bidders must
        satisfy themselves as to the accuracy of the description, and conduct
        any research they feel is necessary before committing to a bid. Please
        see our Terms and Conditions for full details.
      </Typography>
      <Typography mt={3} fontSize="18px">
        This vehicle’s VIN has been checked against the Australian Personal
        Property Securities Register, and there is a security interest or other
        registration kind logged against the serial number. This vehicle has
        been checked through the<mark>Austroads NEVDIS system</mark> , and there
        are no markers under the written-off or stolen databases.
      </Typography>

      <Box component="div" sx={{ mt: 6 }}>
        <HotSpotImage />
      </Box>
    </Container>
  );
};

export default CarSummery;
