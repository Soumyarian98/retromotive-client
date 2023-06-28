import { nanoid } from "nanoid";
import React from "react";
import { FiBookOpen, FiChevronRight } from "react-icons/fi";
import { SlArrowRightCircle } from "react-icons/sl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const data = [
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/07/COVERS1-large.jpg",
    title: "Volume 15",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/03/COVERS1-1-1024x1024.jpg",
    title: "Volume 16",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/COVERS1-large.jpg",
    title: "Volume 18",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/03/COVERS1_Grey-1024x1024.jpg",
    title: "Volume 19",
    date: "March 2020 - April 2021",
  },
];

const MagazineGrid = () => {
  const { palette: p } = useTheme();
  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            py: "5rem",
          }}
          gap={6}>
          <Typography variant="h4" fontWeight={800} textAlign="center">
            QUARTERLIES
          </Typography>
          <VerticalTimeline lineColor={p.secondary.main}>
            {data.map(item => {
              return (
                <VerticalTimelineElement
                  key={item.id}
                  contentStyle={{
                    background: "#000",
                    boxShadow: "none",
                    borderRadius: "4px",
                    padding: "0",
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid ${p.secondary.main}`,
                  }}
                  date={item.date}
                  iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
                  icon={<FiBookOpen />}
                  className="vertical-timeline-element--work">
                  <Paper elevation={3} sx={{ padding: 3 }}>
                    <Stack gap={2}>
                      <Stack
                        direction="row"
                        alignItems="baseline"
                        justifyContent="space-between">
                        <Typography variant="h5" fontWeight={800}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2">$ 29.99</Typography>
                      </Stack>
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />

                      <Button variant="contained" size="large">
                        Add To Cart
                      </Button>
                    </Stack>
                  </Paper>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            endIcon={<SlArrowRightCircle />}>
            View All Magazine
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionWrapper(MagazineGrid, "magazine-grid");
