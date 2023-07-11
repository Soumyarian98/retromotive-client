import React from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FiShoppingBag, FiX } from "react-icons/fi";
import { SlMinus, SlPlus, SlTrash } from "react-icons/sl";
import { red } from "@mui/material/colors";

const CartButton = () => {
  return (
    <>
      <Badge title={"1"}>
        <IconButton color="primary">
          <FiShoppingBag />
        </IconButton>
      </Badge>
      <Drawer anchor="right" open={false} onClose={() => {}}>
        <Box sx={{ position: "sticky", top: 0 }}>
          <Stack
            component={Paper}
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ p: 2 }}>
            <Typography
              variant="h5"
              textTransform="uppercase"
              fontWeight="bold">
              Cart
            </Typography>
            <IconButton color="secondary" sx={{ bgcolor: "grey.50" }}>
              <FiX />
            </IconButton>
          </Stack>
        </Box>
        <Stack sx={{ p: 2, width: "350px" }} spacing={2}>
          {new Array(2).fill(0).map((_, i) => (
            <Card key={i}>
              <CardMedia
                sx={{ width: "100%" }}
                component="img"
                src="https://retromotive.co/wp-content/uploads/2023/03/COVERS1-large.jpg"
              />
              <CardContent>
                <Typography
                  color="textPrimary"
                  fontWeight={700}
                  fontSize="18px"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    cursor: "pointer",
                  }}>
                  Volume 18
                </Typography>
                <Typography variant="body2" fontSize="16px">
                  red - xs
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
                  sx={{ px: 1, pb: 2, flex: 1 }}>
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconButton aria-label="previous">
                      <SlMinus />
                    </IconButton>
                    <Typography variant="h6">1</Typography>
                    <IconButton aria-label="next">
                      <SlPlus />
                    </IconButton>
                  </Stack>
                  <Typography variant="h6">$29.99</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            bgcolor: t => t.palette.background.paper,
          }}>
          <Divider />
          <Stack sx={{ p: 2 }}>
            <Button variant="contained" size="large">
              Checkout
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default CartButton;
