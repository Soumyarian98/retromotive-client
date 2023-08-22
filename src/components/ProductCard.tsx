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
import React, { FC } from "react";
import { FiHeart } from "react-icons/fi";

interface Props {
  title: string;
  brand: string;
  price: number;
  image: string;
}

const ProductCard: FC<Props> = ({ brand, image, price, title }) => {
  return (
    <Card elevation={0} sx={{ height: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <CardActionArea>
          <CardMedia
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              borderRadius: 4,
            }}
            component="img"
            image={image}
          />

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
              ${price}
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
