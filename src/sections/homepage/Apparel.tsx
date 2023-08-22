import React from "react";
import { nanoid } from "nanoid";
import { SlArrowRightCircle } from "react-icons/sl";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";

import ProductCard from "@/components/ProductCard";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

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

const Apparel = ({ apparel }: any) => {
  return (
    <Container maxWidth="lg">
      <Stack justifyContent="center" spacing={4}>
        <Typography
          variant="h5"
          textAlign={{ xs: "left", md: "center" }}
          fontWeight={700}>
          Apparel
        </Typography>
        <div>
          <Grid container spacing={2}>
            {apparel.map((item: any, index: any) => {
              return (
                <Grid item xs={12} md={4} key={index}>
                  <ProductCard
                    brand="Retromotive"
                    image={sanityUrlBuiler(item.featuredImage).width(300).url()}
                    price={item.variants.price}
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
