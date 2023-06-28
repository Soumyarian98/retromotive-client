import { magazines } from "@/data/magazines";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { SlArrowDown } from "react-icons/sl";
import Carousel from "react-multi-carousel";

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MagazineDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const magazine = magazines.find(m => m.slug === id);

  if (!magazine) return <div>Magazine not found</div>;

  return (
    <Container>
      <Grid container spacing={3} sx={{ mt: { xs: 0, lg: 2 } }}>
        <Grid item xs={12} md={8}>
          <Grid
            container
            spacing={1}
            sx={{ display: { xs: "none", lg: "flex" } }}>
            {magazine?.images.map(i => (
              <Grid item xs={12} md={6} key={i}>
                <Box component="img" src={i} sx={{ width: "100%" }} />
              </Grid>
            ))}
          </Grid>
          <Carousel
            containerClass="carousel-container"
            ssr
            infinite
            responsive={responsive}>
            {magazine?.images.map(i => (
              <Box key={i} component="img" src={i} sx={{ width: "100%" }} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack gap={4}>
            <div>
              <Typography variant="h5" fontWeight={700}>
                {magazine?.title}
              </Typography>
              <Typography color="text.secondary">{magazine?.brand}</Typography>
            </div>
            <div>
              <Typography variant="body1">{magazine?.description}</Typography>
            </div>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <div>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="h6">${magazine?.offerPrice}</Typography>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    sx={{ textDecoration: "line-through" }}>
                    ${magazine?.price}
                  </Typography>
                </Stack>
                <Rating
                  precision={0.5}
                  name="size-small"
                  value={4.5}
                  size="small"
                  readOnly
                />
              </div>
              <Button variant="contained" onClick={() => {}} disabled={false}>
                Add to Cart
              </Button>
            </Stack>
            <div>
              {magazine?.stories.map((s, index) => (
                <Accordion key={s.id} defaultExpanded={index === 0}>
                  <AccordionSummary expandIcon={<SlArrowDown />}>
                    <Typography>{s.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">{s.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MagazineDetails;
