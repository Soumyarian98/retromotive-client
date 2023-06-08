import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { nanoid } from "nanoid";
import Carousel from "react-multi-carousel";
import { exteriorImages } from "@/data/carDetails";
import SectionName from "../SectionName";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const engine = {
  id: nanoid(),
  title: "Engine",
  content: [
    "2.0-litre 16V Turbo (built by Tony Lucente)",
    "Custom forged pistons",
    "Lightened factory crankshaft",
    "Carrillo H Beam conrods with custom main caps to suit bearings from small block engine",
    "Custom camshafts",
    "Dry sump setup",
    "Bosch 1600cc injectors",
    "Malpassi fuel pressure regulator",
    "Twin fuel pumps with custom fuel cell",
    "Race intercooler",
    "Custom alloy radiator",
    "Garrett T04Z turbocharger",
    "Custom turbocharger manifold",
    "Tial 42mm external wastegate",
    "HKS SSQV blowoff valve",
    "Motec M400 ECU",
    "Custom cam trigger kit",
  ],
};

const bodywork = {
  id: nanoid(),
  title: "Bodywork",
  content: [
    "Fibreglass custom-made front bumper and spoiler",
    "Fibreglass bonnet",
    "Lexan plastic windows",
    "Custom-made rear wing",
    "Seam-welded body",
  ],
};

const interior = {
  id: nanoid(),
  title: "Interior",
  content: [
    "Stripped-out interior",
    "Velo racing seat with harnesses",
    "Full roll cage – CAMS approved",
    "Custom-made dash panel, with custom fabricated metal gauge panel",
    "Battery isolator switch",
    "10000 RPM tachometer with shift light",
    "Boost, water and oil gauges",
  ],
};

const driveline = {
  id: nanoid(),
  title: "Driveline",
  content: [
    "Nissan Silvia custom subframe conversion",
    "Nissan Skyline limited-slip differential",
    "Toyota Supra Twin Turbo 5-speed gearbox",
    "Custom close ratio PPG straight-cut ‘dog’ engagement gears",
    "Twin-plate clutch",
    "17-inch lightweight wheels",
    "245/40/R17 Dunlop racing semi-slick tyres",
    "Koni coilover suspension",
    "Wilwood cross-drilled front brake discs with 6-piston callipers",
    "Wilwood cross-drilled rear brake discs with 4-piston callipers",
  ],
};

const CarDetailsContent = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", py: 10 }}>
      <Stack alignItems="center" mb={4}>
        <div>
          <SectionName sectionIndex={3} sectionName="Details" />
          <Typography
            variant="h4"
            fontWeight={800}
            textTransform="uppercase"
            sx={{ mt: 0.5 }}>
            SPECIFICATIONS
          </Typography>
        </div>
      </Stack>
      {[engine, bodywork, interior, driveline].map((section, i) => {
        return (
          <Accordion
            elevation={2}
            key={section.id}
            expanded={value === i}
            onChange={(e, n) => setValue(p => (n ? i : p))}>
            <AccordionSummary
              expandIcon={<FiChevronDown size={24} />}
              aria-controls="panel1d-content"
              id="panel1d-header">
              <Typography variant="h4">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List sx={{ listStyleType: "disc" }}>
                <Grid container columnSpacing={4} rowSpacing={2}>
                  {section.content.map((item, index) => {
                    return (
                      <Grid item xs={12} md={6} lg={4}>
                        <ListItem
                          disableGutters
                          disablePadding
                          sx={{ display: "list-item", ml: 2 }}>
                          <ListItemText primary={item} />
                        </ListItem>
                      </Grid>
                    );
                  })}
                </Grid>
              </List>
              <Box component="div" sx={{ mt: 3 }}>
                <Carousel
                  centerMode={true}
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  infinite={true}>
                  {exteriorImages.map((image, index) => {
                    return (
                      <Box key={index} component="div" sx={{ mr: 2 }}>
                        <img
                          src={image}
                          alt="car-detail"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Box>
                    );
                  })}
                </Carousel>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default CarDetailsContent;
