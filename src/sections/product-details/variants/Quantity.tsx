import React from "react";
import { Input, Typography } from "@mui/material";

const Quantity = () => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div>
      <Typography fontWeight={700} gutterBottom>
        Quantity
      </Typography>
      <Input
        sx={{ width: 70 }}
        placeholder="Enter Quantity"
        type="number"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      />
    </div>
  );
};

export default Quantity;
