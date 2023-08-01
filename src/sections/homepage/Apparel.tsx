import { nanoid } from "nanoid";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { SlArrowRightCircle } from "react-icons/sl";
import { motion } from "framer-motion";
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
import ProductCard from "@/components/ProductCard";

const data = [
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/02/12100-8.jpg",
    title: "Consulier GTP lx tee",
    price: 28.99,
  },
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/01/12100-264.jpg",
    title: "Devil z tee",
    price: 28.99,
  },
  {
    id: nanoid(),
    imageUrl: "https://retromotive.co/wp-content/uploads/2023/02/12100-40.jpg",
    title: "Retro tee speedy rainbow",
    price: 28.99,
  },
];

const Apparel = () => {
  return (
    <Container maxWidth="lg">
      <Stack justifyContent="center" spacing={4}>
        <Typography
          variant="h5"
          textAlign="center"
          textTransform="uppercase"
          fontWeight={700}>
          Apparel
        </Typography>
        <div>
          <Grid container spacing={2}>
            {data.map(item => {
              return (
                <Grid item xs={12} md={4}>
                  <ProductCard
                    brand="Retromotive"
                    image={item.imageUrl}
                    price={item.price}
                    title={item.title}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <Button
          sx={{ alignSelf: "center" }}
          variant="contained"
          size="large"
          endIcon={<SlArrowRightCircle />}>
          View All Collection
        </Button>
      </Stack>
    </Container>
  );
};

export default Apparel;
