import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Carousel from "react-multi-carousel";
import { ProductDetails } from "@/types/product-details";
import Variants from "@/sections/product-details/variants";
import useCart from "@/hooks/useCart";
import useAddToCart from "@/hooks/useAddToCart";

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
    items: 1,
    partialVisibilityGutter: 400,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 400,
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any> = async context => {
  const { id } = context.params as any;
  const productResponse = await fetch(
    `http://localhost:9000/api/product-details?id=${id}`
  );
  const productData = await productResponse.json();
  return {
    props: {
      ...productData.data,
    },
  };
};

const ProductDetails = (props: any) => {
  const { nonce } = useCart();
  const cartMutation = useAddToCart();

  if (!props) return null;

  console.log(props, "prups");

  const {
    images,
    name,
    description,
    price,
    attributesData,
    default_attributes,
    variation_products,
  } = props as ProductDetails;

  const handleAddToCart = (params: { [key: string]: string }[]) => {
    const variations = params.reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
    const variant = variation_products!.find(v => {
      const variantAttributeValues = v.attributes_arr.map(a => a.slug);
      const paramValues = Object.values(variations);
      let matched = false;
      matched = paramValues.every(p => variantAttributeValues.includes(p));
      return matched;
    });
    if (variant) {
      console.log(
        {
          product_id: variant.product_id,
          quantity: 1,
          variation: variant.id,
          variations,
        },
        "variant----"
      );
      cartMutation.mutate({
        body: {
          product_id: variant.id,
          quantity: 1,
          // @ts-ignore
          variation: variant.id,
          variations,
        },
        nonce,
      });
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Carousel
              autoPlay
              infinite
              autoPlaySpeed={2000}
              responsive={responsive}>
              {images?.map((image: any) => (
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={image.src}
                    sx={{ objectFit: "contain", width: "100%", height: "100%" }}
                  />
                </Grid>
              ))}
            </Carousel>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}>
            {images?.map((image: any) => (
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={image.src}
                  sx={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <div>
              <Typography
                fontSize="24px"
                textTransform="uppercase"
                fontWeight={700}>
                {name}
              </Typography>
              <Typography color="text.secondary">Retromotive</Typography>
            </div>
            <Stack sx={{ mt: 4 }} spacing={3}>
              <Typography fontSize="24px" fontWeight={700}>
                ${price}
              </Typography>
              {attributesData && (
                <Variants
                  attributes={attributesData}
                  defaultAttributes={default_attributes}
                  handleAddToCart={handleAddToCart}
                />
              )}
            </Stack>
            <Box sx={{ mt: 4 }}>
              <Typography textTransform="uppercase" fontWeight={700}>
                Description
              </Typography>
              <Box
                dangerouslySetInnerHTML={{
                  __html: description,
                }}></Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
