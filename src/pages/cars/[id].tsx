import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgRotate from "lightgallery/plugins/rotate";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  carDetailImages,
  engineSpecifications,
  exteriorImages,
  interiorImages,
  mechanicalImages,
} from "@/data/carDetails";
import {
  FiArrowRight,
  FiChevronRight,
  FiHeart,
  FiSearch,
  FiShare,
  FiShare2,
} from "react-icons/fi";
import { IoColorPaletteOutline, IoSpeedometerOutline } from "react-icons/io5";
import { GrManual } from "react-icons/gr";
import { GiCarWheel } from "react-icons/gi";
import { nanoid } from "nanoid";
import HorizontalScrollSection from "@/components/car-details/HorizontalScrollSection";
import CarDetailsContent from "@/components/car-details/CarDetailsContent";
import CarSummery from "@/components/car-details/CarSummery";

export const carFeatures = [
  { id: nanoid(), label: "Color", value: "Red" },
  { id: nanoid(), label: "Transmission", value: "Manual" },
  { id: nanoid(), label: "Engine", value: "3.3L, 6 Cylinder Turbo" },
  { id: nanoid(), label: "Drive Type", value: "Rear Wheel Drive" },
  { id: nanoid(), label: "Fuel Type", value: "Petrol" },
  { id: nanoid(), label: "Location", value: "London, United Kingdom" },
  { id: nanoid(), label: "Chassis", value: "WPOZZZ93ZCS000000" },
  { id: nanoid(), label: "Year", value: "1982" },
  { id: nanoid(), label: "Mileage", value: "280 Km (Indicated)" },
  { id: nanoid(), label: "VIN", value: "WPOZZZ93ZCS000000" },
  { id: nanoid(), label: "Registration", value: "SWZ 682" },
];

const CarDetails = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div>
      <Box
        component="div"
        sx={{
          position: "relative",
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.0) 50%,rgba(0,0,0,0.7), rgba(0,0,0,1)), url("https://collectingcars.imgix.net/020848/20230517-Porsche-930-SWZ682-Edit-4.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}>
        <Stack
          alignItems="center"
          sx={{
            position: "absolute",
            bottom: "0%",
            left: "0%",
            right: 0,
            color: "white",
            padding: 2,
            pb: 8,
          }}>
          <Stack alignItems="center">
            <Stack direction="row" alignItems="center">
              <Typography
                fontWeight={700}
                variant="body1"
                fontSize="18px"
                textTransform="uppercase">
                PORSCHE
              </Typography>
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  mx: 1.2,
                  transform: "scale(1.5)",
                }}>
                •
              </Box>
              <Typography fontWeight={700} variant="body1" fontSize="18px">
                1980
              </Typography>
            </Stack>
            <Typography
              variant="h2"
              fontWeight={800}
              textAlign="center"
              sx={{ mt: 0.5 }}>
              PORSCHE 911 (930) TURBO
            </Typography>
          </Stack>
          <Paper
            sx={{
              borderRadius: "100px",
              mt: 4,
              px: 2,
              py: 1,
            }}>
            <Stack direction="row" alignItems="center" gap={4}>
              <Typography variant="body2" fontSize="24px" fontWeight={800}>
                €65,500
              </Typography>
              <Stack direction="row" alignItems="center" gap={1}>
                <IconButton color="secondary">
                  <FiHeart />
                </IconButton>
                <IconButton color="secondary">
                  <FiShare2 />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "20px", textTransform: "capitalize" }}>
                  Contact Seller
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Box>

      <HorizontalScrollSection
        sectionName="Car Details"
        sectionIndex={1}
        title="Exterior Features"
        imageArray={exteriorImages}
      />

      <CarDetailsContent />

      <HorizontalScrollSection
        sectionName="Interior"
        sectionIndex={2}
        title="Interior Features"
        imageArray={interiorImages}
      />
      <CarSummery />
      <HorizontalScrollSection
        sectionName="Mechanical"
        sectionIndex={3}
        title="Mechnical Features"
        imageArray={mechanicalImages}
      />

      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src="https://collectingcars.imgix.net/020848/20230517-Porsche-930-SWZ682-Edit-4.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85"
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack gap={8}>
              <div>
                <Stack direction="row" alignItems="center">
                  <Typography
                    fontWeight={700}
                    variant="h6"
                    textTransform="uppercase">
                    PORSCHE
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      mx: 0.5,
                      transform: "scale(0.8)",
                    }}>
                    •
                  </Box>
                  <Typography fontWeight={700} variant="h6">
                    1980
                  </Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 0.25 }}>
                  PORSCHE 911 (930) TURBO
                </Typography>
              </div>
              <Stack gap={1}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Typography fontWeight={700} variant="h6">
                    €65,500
                  </Typography>
                  <Stack direction="row" gap={1}>
                    <IconButton>
                      <FiHeart />
                    </IconButton>
                    <IconButton>
                      <FiShare2 />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack gap={1}>
                  <Button variant="contained">Contact Seller</Button>
                </Stack>
              </Stack>
              <Stack gap={2}>
                <Typography
                  variant="h6"
                  textTransform="uppercase"
                  fontWeight={700}>
                  Car Overview
                </Typography>
                <Grid container spacing={3}>
                  {carFeatures.map(feature => {
                    return (
                      <Grid item xs={6}>
                        <Stack gap={1}>
                          <Typography color="text.secondary" variant="body2">
                            {feature.label}
                          </Typography>
                          <Typography color="text.primary" variant="body1">
                            {feature.value}
                          </Typography>
                        </Stack>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CarDetails;

{
  /* <AppBar>
  <Container maxWidth="lg">
    <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
      <Box component="img" src="/logo.png" sx={{ height: "40px" }} />
      <Stack direction="row">
        {["Shop", "Articles", "Advertise", "Subscribe"].map(i => {
          return (
            <ListItemButton>
              <ListItemText primary={i} />
            </ListItemButton>
          );
        })}
      </Stack>
      <Stack direction="row" gap={2}>
        <IconButton>
          <FiSearch />
        </IconButton>
        <IconButton>
          <FiHeart />
        </IconButton>
      </Stack>
    </Toolbar>
  </Container>
</AppBar>; */
}
