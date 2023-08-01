import { SlArrowRightCircle } from "react-icons/sl";
import { nanoid } from "nanoid";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const data = [
  {
    id: nanoid(),
    title: "Never Miss A Drive. Subscribe To Retromotive Today",
    description:
      "Join the Retromotive squad and enjoy the best automotive content right to your mailbox",
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18ANNUAL_1.jpg",
    button: "Subscribe Now",
  },
  {
    id: nanoid(),
    title: "Download the app to read new articles uploaded weekly",
    description:
      "Retromotive’s brand-new app update is the perfect place for petrolheads! With a 12-month digital subscription, you have full access to the app",
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18DIGITAL_1.jpg",
    button: "Download Now",
  },
];

const GridBanners = () => {
  return (
    <Container maxWidth="lg" component="section">
      <Stack spacing={{ xs: 4, md: 0 }}>
        {data.map((item, i) => {
          return (
            <Stack
              direction="row"
              flexDirection={{
                xs: "column",
                md: i % 2 === 0 ? "row" : "row-reverse",
              }}>
              <Box flex={1}>
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Stack
                flex={1}
                justifyContent="center"
                alignItems={{
                  xs: "flex-start",
                  md: i % 2 === 0 ? "center" : "flex-start",
                }}>
                <Box
                  component="div"
                  key={item.id}
                  sx={{ width: { xs: "100%", md: "70%" } }}>
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    gutterBottom
                    textTransform="capitalize">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button
                    sx={{ mt: 3 }}
                    endIcon={<SlArrowRightCircle />}
                    size="large"
                    color="primary"
                    variant="contained">
                    {item.button}
                  </Button>
                </Box>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
};

export default GridBanners;
