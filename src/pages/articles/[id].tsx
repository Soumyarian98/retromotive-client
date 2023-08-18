import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import { GetStaticProps } from "next";
import { client } from "../../../sanity/lib/client";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "article" && contentHandle.current == "${params?.id}"][0]`;
  const res = await client.fetch(query);
  return {
    props: {
      article: res,
    },
  };
};

const ArticleDetails = ({ article }: any) => {
  if (!article) return <div>Article not found</div>;

  const getBodyContent = () => {
    const { bodyContent } = article;
    console.log(bodyContent, "article");

    return bodyContent.map((b: any) => {
      switch (b._type) {
        case "paragraph":
          return (
            <Container maxWidth="md">
              <Typography variant="body1" fontSize={{ xs: "16px", lg: "18px" }}>
                {b.content}
              </Typography>
            </Container>
          );
        case "quote":
          return (
            <Container maxWidth="sm">
              <Typography
                variant="body1"
                fontSize={{ xs: "16px", lg: "18px" }}
                gutterBottom>
                {b.content}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textAlign: "right" }}>
                - {b.author} | {b.authorTitle}
              </Typography>
            </Container>
          );
        case "imageGrid":
          return (
            <Container maxWidth="xl">
              <Grid container spacing={2}>
                {b.images!.map((i: any) => {
                  const mdColumns = Math.round(12 / b.gridColumns!);
                  return (
                    <Grid key={i} item xs={12} md={mdColumns}>
                      <Box
                        component="img"
                        src={sanityUrlBuiler(i).width(500).url()}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          );
        case "imageCarousel":
          return (
            <Container maxWidth="xl">
              <Carousel
                containerClass="carousel-container"
                ssr
                autoPlay
                infinite
                autoPlaySpeed={5000}
                // centerMode={b.centered ? true : false}
                responsive={{
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                  },
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 2,
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                  },
                }}>
                {b.images!.map((i: any, index: any) => {
                  return (
                    <Box
                      key={index}
                      component="img"
                      src={sanityUrlBuiler(i).width(500).url()}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  );
                })}
              </Carousel>
            </Container>
          );
        default:
          return null;
      }
    });
  };

  return (
    <main>
      <Container
        sx={{ pt: "128px", mb: 4 }}
        component={Stack}
        spacing={1}
        maxWidth="md">
        <Typography
          variant="h5"
          textAlign={{ xs: "left", md: "center" }}
          sx={{ mb: 3, mt: 2 }}
          fontWeight={700}>
          {article.title}
        </Typography>
        <Typography textAlign={{ xs: "left", md: "center" }}>
          {article.description}
        </Typography>
        <Typography
          textAlign={{ xs: "left", md: "center" }}
          color="text.secondary">
          {new Date(article.date).toDateString()}
        </Typography>
      </Container>
      <Stack spacing={4} alignItems="center">
        {getBodyContent()}
      </Stack>
    </main>
  );
};

export default ArticleDetails;
