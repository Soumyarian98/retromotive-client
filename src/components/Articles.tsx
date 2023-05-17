import { nanoid } from "nanoid";
import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const data = [
  {
    id: nanoid(),
    title: "Aviator Game Jogo Online, Avião Para Ganhar Dinheiro",
    image: "/car6.jpg",
  },
  {
    id: nanoid(),
    title: "1Win App Download For Android Apk And Ios For Iphone 2023",
    image: "/car7.jpg",
  },
  {
    id: nanoid(),
    title: "1Win App Review App For Online Betting And Casino Games In India",
    image: "/car8.jpg",
  },
];

const Articles = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        justifyContent="center"
        sx={{
          py: "2vw",
        }}
        gap={6}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Typography variant="h4" fontWeight={800}>
            ARTICLES
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<SlArrowRightCircle />}>
            View All Article
          </Button>
        </Stack>
        <Grid container spacing={4}>
          {data.map(item => {
            return (
              <Grid item lg={4} key={item.id}>
                <Tilt key={item.id}>
                  <Card sx={{ position: "relative" }}>
                    <Box
                      component="img"
                      src={item.image}
                      sx={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <Stack
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        p: 3,
                        background:
                          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
                      }}
                      gap={3}
                      alignItems="center">
                      <Typography variant="h5" textAlign="center">
                        {item.title}
                      </Typography>
                      <Button variant="contained" size="large">
                        Read Article
                      </Button>
                    </Stack>
                  </Card>
                </Tilt>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
};

export default SectionWrapper(Articles, "articles");
