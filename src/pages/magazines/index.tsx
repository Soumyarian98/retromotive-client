import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { client } from "../../../sanity/lib/client";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

interface Props {
  magazines: any;
}

const Magazines: FC<Props> = ({ magazines }) => {
  const router = useRouter();

  return (
    <Container sx={{ pt: "120px" }}>
      <Typography variant="h5" sx={{ mb: 3 }} fontWeight={700}>
        Magazines
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, md: 4 }}
        columnSpacing={{ xs: 1, md: 4 }}>
        {magazines.map((m: any) => {
          return (
            <Grid item xs={6} sm={6} md={4} key={m.id}>
              <Card>
                <CardActionArea
                  onClick={() =>
                    router.push(`/magazines/${m.contentHandle.current}`)
                  }>
                  <CardMedia
                    src={sanityUrlBuiler(m.featuredImage)
                      .width(600)
                      .height(600)
                      .url()}
                    component="img"
                  />
                </CardActionArea>
                <CardHeader
                  disableTypography
                  title={
                    <Typography
                      fontSize={{ xs: "12px", md: "18px" }}
                      fontWeight={700}>
                      {m.title}
                    </Typography>
                  }
                  subheader={
                    <Typography
                      fontSize={{ xs: "10px", md: "14px" }}
                      color="text.secondary">
                      Retromotive
                    </Typography>
                  }
                  action={
                    <Typography
                      fontSize={{ xs: "12px", md: "18px" }}
                      sx={{ mt: 0.5 }}
                      fontWeight={600}>
                      ${m.price?.[0].value}
                    </Typography>
                  }
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "magazine"]{
    title,
    featuredImage,
    price,
    contentHandle,
    releaseDate
  }`;
  const data = await client.fetch(query);
  //sort by release date
  data.sort((a: any, b: any) => {
    // @ts-ignore
    return new Date(b.releaseDate) - new Date(a.releaseDate);
  });
  return {
    props: {
      magazines: data,
    },
    revalidate: 86400,
  };
};

export default Magazines;
