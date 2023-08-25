import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { FiHeart } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  title: string;
  brand: string;
  price: number;
  image: string;
  redirectUrl: string;
}

const ProductCard: FC<Props> = ({
  brand,
  image,
  price,
  title,
  redirectUrl,
}) => {
  const router = useRouter();
  return (
    <Card elevation={0} sx={{ height: "100%", minHeight: "280px" }}>
      <Box sx={{ position: "relative" }}>
        <CardActionArea onClick={() => router.push(redirectUrl)}>
          <LazyLoadImage src={image} width="100%" />
          <CardContent>
            <Stack>
              <Typography
                fontSize={{ xs: "12px", lg: "16px" }}
                color="textPrimary"
                fontWeight={700}>
                {title}
              </Typography>
              <Typography
                fontSize={{ xs: "10px", lg: "14px" }}
                color="textSecondary">
                {brand}
              </Typography>
            </Stack>
            <Typography
              fontSize={{ xs: "14px", lg: "16px" }}
              color="#000"
              fontWeight={600}
              sx={{ mt: 1.5 }}>
              A${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton
          sx={{ position: "absolute", top: 4, right: 4, zIndex: 100 }}>
          <FiHeart stroke="#fff" fill="#00000020" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;
