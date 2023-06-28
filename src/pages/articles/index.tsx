import React from "react";
import {
  Box,
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

import { articles } from "@/data/articles";

const Articles = () => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        textTransform="uppercase"
        sx={{ mb: 3, mt: 2 }}
        fontWeight={700}>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map(a => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" src={a.feturedImage} />
                <CardHeader
                  title={a.title}
                  titleTypographyProps={{ variant: "body1" }}
                  subheader={a.date}
                  subheaderTypographyProps={{ variant: "body2" }}
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <Typography variant="body2">{a.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => router.push(`/articles/${a.contentHandle}`)}
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
