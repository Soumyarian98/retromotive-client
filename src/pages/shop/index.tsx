import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { FiHeart } from "react-icons/fi";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import MobileFilter from "@/sections/shop/MobileFIlter";
import ShoppingCategories from "@/sections/shop/ShoppingCategories";

export const getServerSideProps: GetServerSideProps<any> = async context => {
  const { page, category } = context.query;
  const productResponse = await fetch(
    `http://localhost:9000/api/products?category=${category}&page=${page}`
  );
  const productData = await productResponse.json();
  const categoryResponse = await fetch(
    `http://localhost:9000/api/product-categories`
  );
  const categoryData = await categoryResponse.json();
  return {
    props: {
      productData: productData.data,
      categoryData: categoryData.data,
    },
  };
};

const Shop = (props: any) => {
  const router = useRouter();
  const { page, category } = router.query;
  const { categoryData, productData } = props;

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

  const activeCategory = React.useMemo(() => {
    return categoryData.find((c: any) => c.id === activeCategoryId);
  }, [activeCategoryId, categoryData]);

  return (
    <Container maxWidth="lg">
      <Stack sx={{ mt: 2 }}>
        <Typography
          variant="h5"
          textAlign="center"
          textTransform="uppercase"
          fontWeight={700}>
          {activeCategory?.name || "All Products"}
        </Typography>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={0} md={3}>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <ShoppingCategories
                activeCategoryId={activeCategoryId}
                handleCategoryChange={handleCategoryChange}
                categoryData={categoryData}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {productData.map((p: any) => {
                return (
                  <Grid item xs={6} sm={6} md={4}>
                    <Card key={p.id} elevation={0} sx={{ height: "100%" }}>
                      <Box sx={{ position: "relative" }}>
                        <NextLink href={`/shop/products/${p.id}`} passHref>
                          <CardMedia
                            sx={{
                              cursor: "pointer",
                              textDecoration: "none",
                              opacity: p.stock_status === "instock" ? 1 : 0.25,
                              borderRadius: 4,
                            }}
                            component="img"
                            image={p.images[0]?.src}
                          />
                        </NextLink>
                        <IconButton
                          sx={{ position: "absolute", top: 4, right: 4 }}>
                          <FiHeart stroke="#fff" fill="#00000020" />
                        </IconButton>
                      </Box>
                      <CardContent sx={{ px: 0 }}>
                        <Stack>
                          <Link underline="none">
                            <Typography
                              fontSize={{ xs: "14px", lg: "16px" }}
                              color="textPrimary"
                              fontWeight={600}
                              sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                display: "block",
                                cursor: "pointer",
                              }}>
                              {p.name}
                            </Typography>
                          </Link>
                          <Typography
                            fontSize={{ xs: "14px", lg: "16px" }}
                            color="textSecondary">
                            Retromotive
                          </Typography>
                        </Stack>
                        <Typography
                          fontSize={{ xs: "14px", lg: "16px" }}
                          color="#000"
                          fontWeight={600}
                          sx={{ mt: 1 }}>
                          ${p.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Stack alignItems="center">
          <Pagination
            color="primary"
            count={Math.ceil(activeCategory?.count / 12) || 1}
            page={activePage}
            onChange={handlePageChange}
            variant="outlined"
            sx={{ mt: 4 }}
          />
        </Stack>
        <Box
          sx={{
            mt: 4,
            position: "sticky",
            bottom: 0,
            display: { xs: "block", md: "none" },
          }}>
          <MobileFilter>
            <ShoppingCategories
              activeCategoryId={activeCategoryId}
              handleCategoryChange={handleCategoryChange}
              categoryData={categoryData}
            />
          </MobileFilter>
        </Box>
      </Stack>
    </Container>
  );
};

export default Shop;
