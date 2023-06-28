import { useEffect, useState } from "react";

// next
import NextLink from "next/link";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Link,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { SlHeart } from "react-icons/sl";

interface ProductCardProps {
  id?: string | number;
  color?: string;
  name: string;
  brand: string;
  image: string;
  offer?: string;
  isStock?: boolean;
  description?: string;
  offerPrice?: number;
  salePrice?: number;
  rating?: number;
  open?: boolean;
}

const ProductCard = ({
  id,
  color,
  name,
  brand,
  offer,
  isStock,
  image,
  description,
  offerPrice,
  salePrice,
  rating,
  open,
}: ProductCardProps) => {
  const theme = useTheme();
  const [productRating] = useState<number | undefined>(rating);
  const [wishlisted, setWishlisted] = useState<boolean>(false);

  const addCart = () => {};

  const addToFavourite = () => {};

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Card>
      <NextLink href={`/apps/e-commerce/product-details/${id}`} passHref>
        <CardMedia
          sx={{
            cursor: "pointer",
            textDecoration: "none",
            opacity: isStock ? 1 : 0.25,
          }}
          component="img"
          image={image}
        />
      </NextLink>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          pt: 1.75,
          pl: 2,
          pr: 1,
        }}>
        {!isStock && <Chip color="error" size="small" label="Sold out" />}
        {offer && <Chip label={offer} color="success" size="small" />}
        <IconButton
          color="secondary"
          sx={{ ml: "auto", "&:hover": { background: "transparent" } }}
          onClick={addToFavourite}>
          {wishlisted ? (
            <SlHeart
              style={{
                fontSize: "1.15rem",
                color: theme.palette.error.main,
              }}
            />
          ) : (
            <SlHeart style={{ fontSize: "1.15rem" }} />
          )}
        </IconButton>
      </Stack>
      <Divider />
      <CardContent sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack>
              <Link underline="none">
                <Typography
                  color="textPrimary"
                  fontWeight={700}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    cursor: "pointer",
                  }}>
                  {name}
                </Typography>
              </Link>
              <Typography variant="body2" color="textSecondary">
                {brand}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end">
              <Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="h5">${offerPrice}</Typography>
                  {salePrice && (
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      sx={{ textDecoration: "line-through" }}>
                      ${salePrice}
                    </Typography>
                  )}
                </Stack>
                <Stack direction="row" alignItems="flex-start">
                  <Rating
                    precision={0.5}
                    name="size-small"
                    value={productRating}
                    size="small"
                    readOnly
                  />
                  <Typography variant="caption">
                    ({productRating?.toFixed(1)})
                  </Typography>
                </Stack>
              </Stack>

              <Button variant="contained" onClick={addCart} disabled={!isStock}>
                {!isStock ? "Sold Out" : "Add to Cart"}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
