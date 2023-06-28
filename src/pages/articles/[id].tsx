import { articles } from "@/data/articles";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import Carousel from "react-multi-carousel";

const ArticleDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const article = useMemo(() => {
    return articles.find(a => a.contentHandle === id);
  }, [id]);

  if (!article) return <div>Article not found</div>;

  const getBodyContent = () => {
    const { bodyContent } = article;
    return bodyContent.map(b => {
      switch (b.type) {
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
                {b.images!.map(i => {
                  const mdColumns = Math.round(12 / b.gridColumns!);
                  return (
                    <Grid key={i} item xs={12} md={mdColumns}>
                      <Box
                        component="img"
                        src={i}
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
                {b.images!.map((i, index) => {
                  return (
                    <Box
                      key={index}
                      component="img"
                      src={i}
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
        component={Stack}
        spacing={1}
        maxWidth="md"
        sx={{ mb: 3, mt: 2 }}>
        <Typography
          textAlign={{ xs: "left", md: "center" }}
          variant="h4"
          maxWidth="md"
          textTransform="uppercase"
          fontWeight={700}>
          {article.title}
        </Typography>
        <Typography textAlign={{ xs: "left", md: "center" }}>
          {article.description}
        </Typography>
        <Typography
          textAlign={{ xs: "left", md: "center" }}
          color="text.secondary">
          {article.date}
        </Typography>
      </Container>
      <Stack spacing={4} alignItems="center">
        {getBodyContent()}
      </Stack>
    </main>
  );
};

export default ArticleDetails;
