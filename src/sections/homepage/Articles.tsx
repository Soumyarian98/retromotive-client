import { nanoid } from "nanoid";
import React from "react";
import { SlArrowRightCircle } from "react-icons/sl";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
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
import { articles } from "@/data/articles";
import { useRouter } from "next/router";

const Articles = () => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <Stack justifyContent="center" spacing={4}>
        <Typography
          variant="h5"
          textAlign="center"
          textTransform="uppercase"
          fontWeight={700}>
          Articles
        </Typography>
        <div>
          <Grid container spacing={4}>
            {articles.map(a => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Tilt key={a.id}>
                    <Card>
                      <CardMedia component="img" src={a.feturedImage} />
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
                            {a.date}
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
