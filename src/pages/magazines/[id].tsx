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
import React from "react";
import Carousel from "react-multi-carousel";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";
import { FiHeart } from "react-icons/fi";

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
  const { data } = props;
  const magazine = data[0];

  if (!magazine) {
    return <div>Not found</div>;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid
            container
            spacing={1}
            sx={{ display: { xs: "none", lg: "flex" } }}>
            {magazine?.images.map((i: any) => (
              <Grid item xs={12} md={6} key={i}>
                <Box
                  component="img"
                  src={urlFor(i).width(800).height(800).dpr(1).url()}
                  sx={{ width: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
          <Carousel
            containerClass="carousel-container"
            ssr
            infinite
            responsive={responsive}>
            {magazine?.images.map((i: any) => (
              <Grid item xs={12} md={6} key={i}>
                <Box
                  component="img"
                  src={urlFor(i).width(500).height(800).dpr(1).url()}
                  sx={{ width: "100%" }}
                />
              </Grid>
            ))}
          </Carousel>
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
                onClick={() => {}}
                disabled={false}>
                Add to Cart
              </Button>
            </div>
            <div>
              <PortableText content={magazine.description} />
            </div>
          </Stack>
        </Grid>
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
