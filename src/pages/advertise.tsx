import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SlPaperPlane } from "react-icons/sl";

const Advertise = () => {
  return (
    <main>
      <Box
        component="img"
        src="https://retromotive.co/wp-content/uploads/2023/03/Advert_HEROBANNER2.jpg"
        sx={{ width: "100%", display: { xs: "none", lg: "block" } }}
      />
      <Box
        component="img"
        src="https://retromotive.co/wp-content/uploads/2023/03/Advert_HEROBANNER_mobile2.jpg"
        sx={{ width: "100%", display: { xs: "block", lg: "none" } }}
      />
      <Container sx={{ pt: "60px" }} maxWidth="md">
        <Stack spacing={6}>
          <div>
            <Typography
              gutterBottom
              variant="subtitle1"
              textTransform="uppercase"
              fontWeight={700}>
              Why advertise with Retromotive?
            </Typography>
            <Typography>
              Retromotive offers a unique opportunity to reach a highly engaged
              and passionate audience. With over 300,000 organic followers on
              Instagram and a strong presence on other social media platforms,
              Retromotive has built a loyal following of classic car enthusiasts
              who are eager to learn about new products and services in the
              industry.
            </Typography>
          </div>
          <Box
            component="img"
            src="https://retromotive.co/wp-content/uploads/2023/03/Advert_Platforms1.jpg"
          />
          <div>
            <Typography
              gutterBottom
              variant="subtitle1"
              textTransform="uppercase"
              fontWeight={700}>
              Analogue opportunity
            </Typography>
            <Typography>
              Featured in a coffe-table-book-style magazine that never has an
              off-sale date- instead countless years of retuning readers.
            </Typography>
          </div>
          <div>
            <Typography
              gutterBottom
              variant="subtitle1"
              textTransform="uppercase"
              fontWeight={700}>
              Digital opportunity
            </Typography>
            <Typography>
              Access our social media, retromotove app, EDM and website, we have
              an audience over 300k and over 1 million people reached over
              month.
            </Typography>
          </div>
          <Box
            component="img"
            src="https://retromotive.co/wp-content/uploads/2023/03/Advert_Options1.jpg"
          />
          <Card component="div">
            <CardHeader
              title="Contact us"
              titleTypographyProps={{
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField label="Your Name" fullWidth />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField label="Email" fullWidth />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField label="Phone Number" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    multiline
                    rows={5}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 4 }}
                endIcon={<SlPaperPlane />}>
                Send Message
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </main>
  );
};

export default Advertise;
