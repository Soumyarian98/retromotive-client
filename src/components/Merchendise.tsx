import { nanoid } from "nanoid";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { SlArrowRightCircle } from "react-icons/sl";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "@/utils/motion";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const data = [
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/02/12100-8.jpg",
    title: "Consulier GTP lx tee",
    price: "$28.99",
  },
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/01/12100-264.jpg",
    title: "Devil z tee",
    price: "$28.99",
  },
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/02/12100-40.jpg",
    title: "Retro tee speedy rainbow",
    price: "$28.99",
  },
];

const Merchendise = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack
          justifyContent="center"
          gap={6}
          sx={{ py: "2vw", minHeight: "100vh" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Typography variant="h4" fontWeight={800}>
              APPAREL
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SlArrowRightCircle />}>
              View All Collection
            </Button>
          </Stack>
          <Grid container spacing={4}>
            {data.map(item => {
              return (
                <Grid item lg={4}>
                  <Card key={item.id}>
                    <Box component="div" sx={{ position: "relative" }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          src={item.imageUrl}
                          alt={item.title}
                          sx={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </CardActionArea>
                      <IconButton
                        size="large"
                        color="secondary"
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          zIndex: 10,
                        }}>
                        <FiHeart />
                      </IconButton>
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" fullWidth>
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default SectionWrapper(Merchendise, "merchendise");
