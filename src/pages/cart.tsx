import {
  Avatar,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Theme,
  Typography,
  styled,
  useTheme,
  Card,
} from "@mui/material";
import React, { ReactNode } from "react";
import { FiCheckSquare } from "react-icons/fi";

// tabs

const Checkout = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" sx={{ mb: 3, mt: 2 }} fontWeight={600}>
        Cart
      </Typography>
    </Container>
  );
};

export default Checkout;
