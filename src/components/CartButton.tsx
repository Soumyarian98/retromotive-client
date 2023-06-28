import React from "react";
import { Badge, IconButton } from "@mui/material";
import { FiShoppingBag } from "react-icons/fi";

import useCart from "@/hooks/useCart";

const CartButton = () => {
  const { cartData } = useCart();
  return (
    <Badge title={cartData?.items_count || 0}>
      <IconButton color="primary">
        <FiShoppingBag />
      </IconButton>
    </Badge>
  );
};

export default CartButton;
