import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { GetServerSideProps, GetStaticPaths } from "next";
import { groq } from "next-sanity";
import ProductCard from "@/components/ProductCard";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { client } from "../../../sanity/lib/client";

export const getStaticPaths: GetStaticPaths = async () => {
  const groqQuery = groq`*[_type == "category"]{slug}`;
  const productResponse = await client.fetch(groqQuery);
  const paths = productResponse.map((p: any) => ({
    params: { id: p.slug.current },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetServerSideProps<any> = async ({ params }) => {
  const groqQuery = groq`*[_type == "category" && slug.current == "${params?.id}" ][0]{
    title,
    _id,
    slug,
    "productData": *[_type == "product" && references(^._id)]{
      _id, title,slug , variants[0]{price}, featuredImage
    }
  }`;
  const productResponse = await client.fetch(groqQuery);
  return {
    props: productResponse,
  };
};

const Shop = (props: any) => {
  const { slug, title, productData } = props;
  console.log(props, "productData");
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: "100px", md: "128px" }, mb: 4 }}>
      <Stack spacing={4}>
        <Typography
          variant="h5"
          textTransform="uppercase"
          sx={{ mb: 2, fontSize: { xs: "18px", md: "24px" } }}
          fontWeight={700}>
          {title}
        </Typography>

        <div>
          <Grid container spacing={{ xs: 0.5, md: 4 }}>
            {productData.map((p: any) => {
              if (!p.featuredImage) return null;
              return (
                <Grid key={p._id} item xs={6} sm={6} md={4}>
                  <LazyLoadComponent>
                    <ProductCard
                      brand="Retromotive"
                      title={p.title}
                      price={p?.variants?.price ?? 0}
                      image={sanityUrlBuiler(p.featuredImage).width(400).url()}
                      redirectUrl={`/product/${p.slug.current}`}
                    />
                  </LazyLoadComponent>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Stack>
    </Container>
  );
};

export default Shop;
