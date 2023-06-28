import ProductCard from "@/components/ProductCard";
import { magazines } from "@/data/magazines";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Magazines = () => {
  const router = useRouter();
  return (
    <Container>
      <Typography variant="h3" sx={{ mb: 3, mt: 2 }} fontWeight={600}>
        Magazines
      </Typography>
      <Grid container>
        {magazines.map(m => {
          return (
            <Grid item xs={12} sm={6} md={4} key={m.id}>
              <Card>
                <CardActionArea
                  onClick={() => router.push(`/magazines/${m.slug}`)}>
                  <CardMedia src={m.featuredImage} component="img" />
                </CardActionArea>
                <CardHeader
                  title={m.title}
                  titleTypographyProps={{ variant: "h6", fontWeight: 700 }}
                  subheader={m.brand}
                  subheaderTypographyProps={{ variant: "body1" }}
                  sx={{ pb: 0 }}
                />
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <div>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6">${m.offerPrice}</Typography>
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          sx={{ textDecoration: "line-through" }}>
                          ${m.price}
                        </Typography>
                      </Stack>
                      <Rating
                        precision={0.5}
                        name="size-small"
                        value={m.rating}
                        size="small"
                        readOnly
                      />
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {}}
                      disabled={false}>
                      Add to Cart
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Magazines;
