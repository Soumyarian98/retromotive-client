import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React from "react";
import { PricingPlan } from "@/components/PricingPlan";
import { nanoid } from "nanoid";
import { grey } from "@mui/material/colors";

const subscriptions = {
  title: "Pick Your Subscription",
  subtitle: `Retromotive is a premium coffee table style publication focused on classic cars, people and their stories.<br/> The clean, uncluttered layout strips everything back to reveal an intimate journey through beautiful imagery and engaging stories.`,
  plans: [
    {
      id: nanoid(),
      name: "Annual Subscription",
      pricing: "98.99",
      currency: "$",
      description: "Get latest issues of Retromotive delivered to your door!",
      features: [
        "For one year, you will receive one issue of Retromotive every quarter (four issues in total).",
        "Exclusive digital content, which can be accessed on our mobile app",
        "Subscription renews annually",
        "Subscription starts with the next issue (Retromotive Issue 19)",
      ],
      notes: [],
      popular: false,
      image:
        "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18ANNUAL_1.jpg",
    },
    {
      id: nanoid(),
      name: "Annual Digital Subscription",
      pricing: "49.99",
      currency: "$",
      description:
        "Retromotive’s brand-new app update is the perfect place for petrolheads!",
      features: [
        "Full access to the retromotive app.",
        "Read the flip-book-style digital magazines and articles",
        "Post photos and videos",
        "Chat with like-minded petrolheads",
        "Comment on the articles",
      ],
      notes: [
        "After purchasing a digital subscription, search ‘Retromotive’ in the App store or google play, download, log in using the email you used to make the purchase, and enjoy.",
        "The APP is still free for non-subscribers; however, they do not have access to the digital magazines.",
      ],
      popular: true,
      image:
        "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18DIGITAL_2.jpg",
    },
  ],
};

const MagazineSubscription = () => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: theme =>
          theme.palette.mode === "dark" ? grey[800] : grey[50],
        mt: 2,
      }}>
      <Container maxWidth="lg">
        <Box
          component="div"
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            mb: 4,
          }}>
          <Typography variant="h3" fontWeight={600}>
            {subscriptions.title}
          </Typography>
          <Typography
            component="p"
            color="text.secondary"
            sx={{ my: 2 }}
            variant="body1"
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: subscriptions.subtitle }}
          />
        </Box>
        <Grid container spacing={4}>
          {subscriptions.plans.map(plan => (
            <Grid xs={12} md={6} key={plan.id}>
              <PricingPlan
                popular={plan.popular}
                cta="Subscribe Now"
                currency={plan.currency}
                description={plan.description}
                features={plan.features}
                icon={null}
                name={plan.name}
                price={plan.pricing}
                sx={{
                  height: "100%",
                  mx: "auto",
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Box component="div" sx={{ mt: 4 }}>
          <Typography
            align="center"
            color="text.secondary"
            component="p"
            variant="caption">
            * All prices are in USD. You can cancel your subscription at any
            time.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MagazineSubscription;
