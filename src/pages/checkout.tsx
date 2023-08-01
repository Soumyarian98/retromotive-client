import AddressCard from "@/components/AddressCard";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardMedia,
  Stack,
  CardContent,
  IconButton,
  CardHeader,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { SlArrowDown, SlMinus, SlPlus, SlTrash } from "react-icons/sl";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

// tabs

const Checkout = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Container maxWidth="md">
      <Typography variant="h3" sx={{ mb: 3, mt: 2 }} fontWeight={600}>
        Checkout
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<SlArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Cart</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={3}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}>
              <CardMedia
                sx={{ width: { xs: "100%", md: "200px" } }}
                component="img"
                src="https://retromotive.co/wp-content/uploads/2023/03/COVERS1-large.jpg"
              />
              <Stack flex={1}>
                <CardHeader
                  title="Volume 18"
                  titleTypographyProps={{ variant: "h5" }}
                  subheader="$29.99"
                  action={
                    <IconButton color="error">
                      <SlTrash />
                    </IconButton>
                  }
                />
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
              </Stack>
            </Card>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}>
              <CardMedia
                sx={{ width: { xs: "100%", md: "200px" } }}
                component="img"
                src="https://retromotive.co/wp-content/uploads/2022/03/COVERS1-1-1024x1024.jpg"
              />
              <Stack flex={1}>
                <CardHeader
                  title="Volume 15"
                  titleTypographyProps={{ variant: "h5" }}
                  subheader="$29.99"
                  action={
                    <IconButton color="error">
                      <SlTrash />
                    </IconButton>
                  }
                />
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
              </Stack>
            </Card>
            <Button
              variant="contained"
              size="large"
              sx={{ alignSelf: { xs: "stretch", md: "flex-end" } }}>
              Proceed To Address
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SlArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AddressCard
                address={{
                  name: "John Doe",
                  building: "Building 1",
                  street: "Street 1",
                  city: "City 1",
                  state: "State 1",
                  country: "Country 1",
                  post: "123456",
                  phone: "1234567890",
                  destination: "Home",
                  isDefault: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AddressCard
                address={{
                  name: "John Doe",
                  building: "Building 1",
                  street: "Street 1",
                  city: "City 1",
                  state: "State 1",
                  country: "Country 1",
                  post: "123456",
                  phone: "1234567890",
                  destination: "Home",
                  isDefault: false,
                }}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SlArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Checkout;
