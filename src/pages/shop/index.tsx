import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import ProductCard from "@/components/ProductCard";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

export const getServerSideProps: GetServerSideProps<any> = async context => {
  const groqQuery = groq`*[_type == "product"]{ _id, title, variants[0]{price}, featuredImage}`;
  const productResponse = await client.fetch(groqQuery);

  return {
    props: {
      productData: productResponse,
    },
  };
};

const Shop = (props: any) => {
  const router = useRouter();
  const { page, category } = router.query;
  const { productData } = props;

  const [activeCategoryId, setActiveCategoryId] = React.useState(
    Number(category)
  );
  const [activePage, setActivePage] = React.useState(Number(page || 1));

  React.useEffect(() => {
    setActiveCategoryId(Number(router.query.category));
    setActivePage(Number(router.query.page || 1));
  }, [router.query]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(
      `/shop?category=${(event.target as HTMLInputElement).value}&page=1`
    );
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    router.push(`/shop?category=${activeCategoryId}&page=${value}`);
  };

  // const activeCategory = React.useMemo(() => {
  //   return categoryData.find((c: any) => c.id === activeCategoryId);
  // }, [activeCategoryId, categoryData]);

  const createCheckoutSession = () => {};

  return (
    <Container maxWidth="lg" sx={{ pt: "128px" }}>
      <Stack sx={{ mt: 2 }} spacing={4}>
        <Typography variant="h5" sx={{ mb: 3 }} fontWeight={700}>
          All Products
        </Typography>

        <div>
          <Grid container spacing={{ xs: 0.5, md: 4 }}>
            {productData.map((p: any) => {
              if (!p.featuredImage) return null;
              return (
                <Grid item xs={6} sm={6} md={4}>
                  <ProductCard
                    brand="Retromotive"
                    title={p.title}
                    price={p.variants.price}
                    image={sanityUrlBuiler(p.featuredImage).width(300).url()}
                  />
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
