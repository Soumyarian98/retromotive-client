import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
import Tilt from "react-parallax-tilt";
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
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

const Articles = ({ articles }: any) => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Stack justifyContent="center" spacing={4}>
        <Typography
          variant="h5"
          textAlign={{ xs: "left", md: "center" }}
          fontWeight={700}>
          Articles
        </Typography>
        <div>
          <Grid container spacing={4}>
            {articles.map((a: any) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Tilt key={a.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        src={sanityUrlBuiler(a.feturedImage).width(700).url()}
                      />
                      <CardHeader
                        disableTypography
                        title={
                          <Typography
                            variant="h6"
                            fontSize={{
                              xs: "14px",
                              md: "16px",
                            }}>
                            {a.title}
                          </Typography>
                        }
                        subheader={
                          <Typography
                            color="text.secondary"
                            variant="body2"
                            fontSize={{
                              xs: "12px",
                              md: "14px",
                            }}>
                            {new Date(a.date).toDateString()}
                          </Typography>
                        }
                        sx={{ pb: 0 }}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          fontSize={{
                            xs: "12px",
                            md: "14px",
                          }}
                          sx={{
                            height: "100px",
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}>
                          {a.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={() =>
                            router.push(`/articles/${a.contentHandle}`)
                          }
                          variant="contained"
                          color="secondary"
                          endIcon={<SlArrowRightCircle />}>
                          Read Article
                        </Button>
                      </CardActions>
                    </Card>
                  </Tilt>
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
          View All Articles
        </Button>
      </Stack>
    </Container>
  );
};

export default Articles;
