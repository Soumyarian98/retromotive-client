import { useState, useMemo } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import Carousel from "react-multi-carousel";
import PortableText from "react-portable-text";
import { FiHeart } from "react-icons/fi";

import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";
import { ShareButton } from "@/components/ShareButton";
import { client } from "../../../sanity/lib/client";
import { useCartStore } from "@/hooks/useCartStore";
import { toast } from "react-hot-toast";

const responsive = {
  superLargeDesktop: {
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
  const { addItem, cartData, toggle } = useCartStore();
  const [selectedAttributes, setSelectedAttributes] = useState(
    props.attributes.reduce((acc: any, curr: any) => {
      return {
        ...acc,
        [curr._key]: curr.attributeEntities[0].printifyId,
      };
    }, {})
  );

  const selectedVariant = useMemo(() => {
    const variant = props.variants.find((v: any) => {
      const values = Object.values(selectedAttributes);
      return v.attributeEntities.every((el: number) => values.includes(el));
    });
    return variant;
  }, [selectedAttributes, props]);

  const isItemExistInCart = useMemo(() => {
    const item = cartData.find((i: any) => i.item._id === props._id);
    return Boolean(item);
  }, [cartData, props._id]);

  const handleAddToCart = () => {
    if (isItemExistInCart) {
      toggle();
    } else {
      addItem({
        ...props,
        selectedVariant,
      });
      toast.success("Added to cart");
      toggle();
    }
  };

  const shareText = `Hey! Check out this awesome product on Retromotive. Hope you will like it :)\n\n1. ${props.title}:\n https://retromotive.co/product/${props.slug.current}\n\n`;

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: "100px", md: "128px" }, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}
            src={sanityUrlBuiler(props.featuredImage)
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
              {props.images.map((i: any) => (
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
              <Typography variant="h6" fontWeight={700}>
                {props.title}
              </Typography>
              <Typography color="text.secondary">Retromotive</Typography>
            </div>
            <Stack spacing={2}>
              {props.attributes.map((a: any) => (
                <Stack key={a._key}>
                  <Typography variant="body2" fontWeight={700} gutterBottom>
                    {a.name}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {a.attributeEntities.map((e: any) => {
                      const isSelected =
                        selectedAttributes[a._key] === e.printifyId;
                      return (
                        <Chip
                          key={e._key}
                          variant={isSelected ? "filled" : "outlined"}
                          size="small"
                          label={e.value}
                          color={isSelected ? "secondary" : "default"}
                          onClick={() => {
                            setSelectedAttributes({
                              ...selectedAttributes,
                              [a._key]: e.printifyId,
                            });
                          }}
                        />
                      );
                    })}
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <div>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Typography variant="h6">A${selectedVariant?.price}</Typography>
                <div>
                  <IconButton sx={{ mr: 1 }}>
                    <FiHeart />
                  </IconButton>
                  <ShareButton shareText={shareText} />
                </div>
              </Stack>
              <Button
                sx={{ mt: 1 }}
                fullWidth
                size="large"
                variant="contained"
                onClick={handleAddToCart}
                disabled={false}
                color={isItemExistInCart ? "secondary" : "primary"}>
                {isItemExistInCart ? "Proceed To Checkout" : "Add to Cart"}
              </Button>
            </div>
            <div>
              <PortableText content={props.description} />
            </div>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        {props.images.map((i: any) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component="img"
              src={sanityUrlBuiler(i).width(800).height(800).dpr(1).url()}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
        ))}
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
