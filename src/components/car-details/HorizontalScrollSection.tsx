import { exteriorImages } from "@/data/carDetails";
import { carFeatures } from "@/pages/cars/[id]";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState, useRef } from "react";
import { FiArrowRight, FiChevronRight, FiX } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LightGallery from "./LightGallery";
import SectionName from "../SectionName";

interface Props {
  title: string;
  imageArray: string[];
  sectionIndex: number;
  sectionName: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 400,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 400,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 400,
  },
};

const HorizontalScrollSection = ({
  imageArray,
  title,
  sectionName,
  sectionIndex,
}: Props) => {
  const [open, setOpen] = useState(false);
  const lightGalleryRef = useRef<any>(null);

  return (
    <div>
      <LightGallery images={imageArray} ref={lightGalleryRef} />
      <Box
        component="div"
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}>
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={2000}
          responsive={responsive}
          partialVisible>
          {imageArray.slice(0, 5).map((i, index) => {
            return (
              <Box
                key={index}
                component="img"
                src={i}
                sx={{
                  mr: 4,
                  height: "100vh",
                  width: "auto",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            );
          })}
        </Carousel>

        <Box component="div" position="absolute" top="10%" left={"5%"}>
          <SectionName sectionIndex={sectionIndex} sectionName={sectionName} />
          <Typography
            mt={0.5}
            color="white"
            variant="h4"
            textTransform="uppercase"
            fontWeight={800}
            sx={{ mixBlendMode: "difference" }}>
            {title}
          </Typography>
          <Stack direction="row" gap={2} sx={{ mt: 3 }}>
            <Button
              onClick={() => lightGalleryRef.current.openGallery()}
              size="large"
              variant="outlined">
              Show Gallery
            </Button>
            <Button
              onClick={() => setOpen(true)}
              size="large"
              variant="contained"
              endIcon={<FiArrowRight />}>
              Discover more
            </Button>
          </Stack>
        </Box>
      </Box>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack
          direction="row"
          sx={{ width: "100vw", height: "100%", overflowX: "scroll" }}
          alignItems="center"
          gap={6}>
          <Stack height="100%" justifyContent="center" sx={{ px: 2 }}>
            <Box
              component="div"
              sx={{ bgcolor: grey[100], borderRadius: "100%" }}>
              <IconButton
                size="large"
                color="primary"
                onClick={() => setOpen(false)}>
                <FiX />
              </IconButton>
            </Box>
          </Stack>
          <List
            subheader={
              <ListSubheader sx={{ mb: 2 }}>
                <Typography
                  variant="h4"
                  color="#000"
                  fontWeight={800}
                  textTransform="uppercase">
                  {title}
                </Typography>
              </ListSubheader>
            }
            sx={{ minWidth: "50vw" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Based upon the sprightly 124 Sport Coupe, this custom build is now a hugely powerful and modernised track-focused classic." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>2</Avatar>
              </ListItemAvatar>
              <ListItemText primary="At the heart of the build is a Garrett turbocharged 2.0-litre 16-valve racing engine built by Tony Lucente, with custom forged pistons, a lightened factory crankshaft, Carrillo con-rods with custom main caps to suit revised bearings, custom camshafts, a dry sump setup, and a MoTeC M400 ECU." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>3</Avatar>
              </ListItemAvatar>
              <ListItemText primary="There are Bosch 1600cc injectors, a Malpassi fuel pressure regulator, and twin fuel pumps within a custom fuel cell." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>4</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Its steel body was seam-welded, and then enhanced with a custom fibreglass front bumper and splitter, fibreglass bonnet, custom rear wing, and Lexan windows." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>5</Avatar>
              </ListItemAvatar>
              <ListItemText primary="The chassis was significantly upgraded with a Nissan Silvia subframe conversion and a Skyline limited-slip differential, while the car also received Wilwood brakes and Koni suspension." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>6</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Its weight is reported to be around 1100kg, while the power is approximately 388kW / 520hp at the wheels with the turbocharger running at 25psi." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>7</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Accompanying the car is a CAMS / Motorsport Australia logbook, plus some historical racing paperwork, and a spare parts package including some body panels and assorted mechanical spares." />
            </ListItem>
          </List>
          <Box
            component="img"
            src="https://cdn.ferrari.com/cms/network/media/img/resize/639b0193b9793500227eb2c8-ferrari-driving-courses-sport-focus-4?width=1920&height=1080"
            height="100%"
          />

          {/* <Grid container spacing={3} sx={{ height: "50%" }}>
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
          </Grid> */}
        </Stack>
      </Drawer>
    </div>
  );
};

export default HorizontalScrollSection;
