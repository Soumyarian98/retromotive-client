import { useEffect } from "react";
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
import {
  FiMinusCircle,
  FiPlusCircle,
  FiShoppingCart,
  FiTrash,
  FiX,
} from "react-icons/fi";

import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";
import { useCartStore } from "@/hooks/useCartStore";
import getStripe from "@/utils/get-stripe";
import axios from "axios";

const CartButton = () => {
  const { show, toggle, cartData, removeItem, setCartData, updateQuantity } =
    useCartStore();

  useEffect(() => {
    const cartData = localStorage.getItem("cartData");
    if (cartData) setCartData(JSON.parse(cartData));
  }, []);

  const handleUpdateQuantity = (
    id: string,
    quantity: number,
    payload: 1 | -1
  ) => {
    if (quantity === 0 && payload === -1) return removeItem(id);
    updateQuantity(id, quantity + payload);
  };

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const cheeckoutSession = await axios.post("/api/checkout_session", {
      items: cartData,
    });
    const result = await stripe?.redirectToCheckout({
      sessionId: cheeckoutSession.data.id,
    });
    if (result?.error) alert(result.error.message);
  };

  return (
    <>
      <Badge badgeContent={cartData.length} color="secondary">
        <IconButton color="primary" onClick={toggle}>
          <FiShoppingCart />
        </IconButton>
      </Badge>
      <Drawer anchor="right" open={show} onClose={toggle}>
        <Box sx={{ bgcolor: "#fcfcfc" }}>
          <Box sx={{ position: "sticky", top: 0 }}>
            <Stack
              component={Paper}
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              sx={{ p: 2 }}>
              <Typography variant="h5" fontWeight="bold">
                Cart
              </Typography>
              <IconButton
                color="secondary"
                sx={{ bgcolor: "grey.50" }}
                onClick={toggle}>
                <FiX />
              </IconButton>
            </Stack>
          </Box>
          <Stack sx={{ p: 2, width: "350px" }} spacing={2}>
            {cartData.length === 0 && (
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    Your Cart is Empty
                  </Typography>
                </CardContent>
              </Card>
            )}
            {cartData.map((c, i) => (
              <Card key={i}>
                <CardMedia
                  sx={{ width: "100%" }}
                  component="img"
                  src={sanityUrlBuiler(c.item.featuredImage)
                    .width(800)
                    .height(800)
                    .dpr(1)
                    .url()}
                />
                <CardHeader
                  disableTypography
                  title={
                    <Typography fontSize="18px" fontWeight={700}>
                      {c.item.title}
                    </Typography>
                  }
                  subheader={
                    <Typography fontSize="14px" color="text.secondary">
                      Retromotive
                    </Typography>
                  }
                  action={
                    <Typography
                      fontSize="18px"
                      sx={{ mt: 0.5 }}
                      fontWeight={600}>
                      ${c.item.price?.[0].value}
                    </Typography>
                  }
                  sx={{ pb: 0 }}
                />
                <CardContent className="flex justify-between items-center gap-2">
                  <div className="flex gap-2 items-center -ml-2">
                    <IconButton
                      color="secondary"
                      onClick={() =>
                        handleUpdateQuantity(c.item._id, c.quantity, -1)
                      }>
                      <FiMinusCircle />
                    </IconButton>
                    <Typography variant="h6" fontWeight={700}>
                      {c.quantity}
                    </Typography>
                    <IconButton
                      color="secondary"
                      onClick={() =>
                        handleUpdateQuantity(c.item._id, c.quantity, 1)
                      }>
                      <FiPlusCircle />
                    </IconButton>
                  </div>
                  <IconButton
                    color="error"
                    className="-mr-2"
                    onClick={() => removeItem(c.item._id)}>
                    <FiTrash />
                  </IconButton>
                </CardContent>
              </Card>
            ))}
          </Stack>
          {cartData.length !== 0 ? (
            <Box
              sx={{
                position: "sticky",
                bottom: 0,
                bgcolor: t => t.palette.background.paper,
              }}>
              <Divider />
              <Stack sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleCheckout}>
                  Checkout
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Drawer>
    </>
  );
};

export default CartButton;
