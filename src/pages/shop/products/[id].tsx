import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Carousel from "react-multi-carousel";
import Variants from "@/sections/product-details/variants";
import useCart from "@/hooks/useCart";
import useAddToCart from "@/hooks/useAddToCart";
import { client } from "../../../../sanity/lib/client";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";
import { FiHeart } from "react-icons/fi";
import PortableText from "react-portable-text";
import { ShareButton } from "@/components/ShareButton";

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

const ProductDetails = (props: any) => {
  console.log(props, "props");

  if (!props) return null;

  const {
    images,
    featuredImage,
    title,
    name,
    description,
    price,
    attributesData,
    default_attributes,
    variation_products,
  } = props;

  // const handleAddToCart = (params: { [key: string]: string }[]) => {
  //   const variations = params.reduce((acc, curr) => {
  //     return { ...acc, ...curr };
  //   }, {});
  //   const variant = variation_products!.find(v => {
  //     const variantAttributeValues = v.attributes_arr.map(a => a.slug);
  //     const paramValues = Object.values(variations);
  //     let matched = false;
  //     matched = paramValues.every(p => variantAttributeValues.includes(p));
  //     return matched;
  //   });
  //   if (variant) {
  //     console.log(
  //       {
  //         product_id: variant.product_id,
  //         quantity: 1,
  //         variation: variant.id,
  //         variations,
  //       },
  //       "variant----"
  //     );
  //     cartMutation.mutate({
  //       body: {
  //         product_id: variant.id,
  //         quantity: 1,
  //         // @ts-ignore
  //         variation: variant.id,
  //         variations,
  //       },
  //       nonce,
  //     });
  //   }
  // };

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: "100px", md: "128px" }, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}
            src={sanityUrlBuiler(featuredImage)
              .width(800)
              .height(800)
              .dpr(1)
              .url()}
          />
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Carousel
              containerClass="carousel-container"
              ssr
              infinite
              responsive={responsive}>
              {images.map((i: any) => (
                <Grid item xs={12} md={6} key={i}>
                  <Box
                    component="img"
                    src={sanityUrlBuiler(i).width(800).height(800).dpr(1).url()}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              ))}
            </Carousel>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack gap={4}>
            <div>
              <Typography variant="h5" fontWeight={700}>
                {title}
              </Typography>
              <Typography color="text.secondary">Retromotive</Typography>
            </div>
            <div>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <div>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6">A$20</Typography>
                  </Stack>
                </div>
                <IconButton>
                  <FiHeart />
                </IconButton>
              </Stack>
              <Button
                sx={{ mt: 1 }}
                fullWidth
                size="large"
                variant="contained"
                onClick={() => {}}
                disabled={false}
                color={false ? "secondary" : "primary"}>
                {false ? "Proceed To Checkout" : "Add to Cart"}
              </Button>
              <Stack
                direction="row"
                spacing={1}
                mt={2}
                alignItems="center"
                justifyContent="space-between">
                <Stack
                  direction="row"
                  spacing={1}
                  ml={-1}
                  alignItems="center"></Stack>
                <ShareButton shareText={""} />
              </Stack>
            </div>

            <div>
              <PortableText content={description} />
            </div>
          </Stack>
        </Grid>
        {/* <Grid item xs={12} md={6}>
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
        </Grid> */}
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "product" && slug.current == "${params?.id}"][0]`;
  const data = await client.fetch(query);
  return {
    props: data,
  };
};

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default ProductDetails;
