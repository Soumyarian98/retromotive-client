import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { SlArrowRightCircle } from "react-icons/sl";

import { client } from "../../../sanity/lib/client";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

export const getStaticProps = async () => {
  const res = await client.fetch(`*[_type == "article"]{
    description,
    date,
    contentHandle,
    title,
    feturedImage
  }`);
  return {
    props: {
      articles: res,
    },
  };
};

const Articles = ({ articles }: any) => {
  console.log(articles, "articles");
  const router = useRouter();
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: "100px", md: "128px" } }}>
      <Typography
        variant="h5"
        textTransform="uppercase"
        sx={{ mb: 3 }}
        fontWeight={700}>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map((a: any) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  src={sanityUrlBuiler(a.feturedImage).width(400).url()}
                />
                <CardHeader
                  title={a.title}
                  titleTypographyProps={{ variant: "body1" }}
                  subheader={new Date(a.date).toDateString()}
                  subheaderTypographyProps={{ variant: "body2" }}
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <Typography variant="body2">
                    {a.description.slice(0, 190)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() =>
                      router.push(`/articles/${a.contentHandle.current}`)
                    }
                    variant="contained"
                    color="secondary"
                    endIcon={<SlArrowRightCircle />}>
                    Read Article
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Articles;
