import React, { useMemo } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import Carousel from "react-multi-carousel";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";
import {
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import Link from "next/link";
import { FaPinterest } from "react-icons/fa";
import { toast } from "react-hot-toast";

import { client } from "../../../sanity/lib/client";
import { ShareButton } from "@/components/ShareButton";
import { useCartStore } from "@/hooks/useCartStore";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MagazineDetails = (props: any) => {
  const { addItem, cartData, toggle } = useCartStore();
  const { data } = props;
  const magazine = data[0];

  if (!magazine) {
    return <div>Not found</div>;
  }

  const socialMedias = {
    facebook: <FiFacebook className="text-indigo-600 fill-indigo-50" />,
    twitter: <FiTwitter className="text-blue-500 fill-blue-50" />,
    youtube: <FiYoutube className="text-red-600 fill-red-50" />,
    instgram: <FiInstagram className="text-pink-600 fill-pink-50" />,
    pintrest: <FaPinterest className="text-red-600 fill-red-50" />,
  };

  const shareText = `Hey! Check out this awesome magazine on Retromotive. Hope you will like them :)\n\n1. ${magazine.title}:\n https://retromotive.co//magazines/${magazine.contentHandle.current}\n\n`;

  const isItemExistInCart = useMemo(() => {
    const item = cartData.find((i: any) => i.item._id === magazine._id);
    return Boolean(item);
  }, [cartData, magazine._id]);

  const handleAddToCart = () => {
    if (isItemExistInCart) {
      toggle();
    } else {
      addItem(magazine);
      toast.success("Added to cart");
      toggle();
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid
            container
            spacing={1}
            sx={{ display: { xs: "none", lg: "flex" } }}>
            <Grid item xs={12}>
              <Box
                component="img"
                src={urlFor(magazine.featuredImage)
                  .width(800)
                  .height(800)
                  .dpr(1)
                  .url()}
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Carousel
              containerClass="carousel-container"
              ssr
              infinite
              responsive={responsive}>
              {magazine?.images.map((i: any) => (
                <Grid item xs={12} md={6} key={i}>
                  <Box
                    component="img"
                    src={urlFor(i).width(800).height(800).dpr(1).url()}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              ))}
            </Carousel>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack gap={4}>
            <div>
              <Typography variant="h5" fontWeight={700}>
                {magazine.title}
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
                    <Typography variant="h6">
                      ${magazine.price[0].value}
                    </Typography>
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
                onClick={handleAddToCart}
                disabled={false}
                color={isItemExistInCart ? "secondary" : "primary"}>
                {isItemExistInCart ? "Proceed To Checkout" : "Add to Cart"}
              </Button>
              <Stack
                direction="row"
                spacing={1}
                mt={2}
                alignItems="center"
                justifyContent="space-between">
                <Stack direction="row" spacing={1} ml={-1} alignItems="center">
                  {magazine?.socialMediaLinks.map((t: any) => (
                    <Link href={t.url} target="_blank">
                      {/* @ts-ignore */}
                      <IconButton>{socialMedias[t.platform]}</IconButton>
                    </Link>
                  ))}
                </Stack>
                <ShareButton shareText={shareText} />
              </Stack>
            </div>

            <div>
              <PortableText content={magazine.description} />
            </div>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        {magazine?.images.map((i: any) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component="img"
              src={urlFor(i).width(800).height(800).dpr(1).url()}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "magazine" && contentHandle.current == "${params?.id}"]`;
  const data = await client.fetch(query);
  return {
    props: {
      data,
    },
  };
};

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export default MagazineDetails;
