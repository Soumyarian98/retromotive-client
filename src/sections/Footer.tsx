import type { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  TextField,
} from "@mui/material";
import Logo from "@/components/Logo";
import { blue, grey, indigo, pink } from "@mui/material/colors";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

interface Section {
  title: string;
  items: {
    external?: boolean;
    title: string;
    path: string;
    icon?: React.ReactNode;
  }[];
}

const sections: Section[] = [
  {
    title: "Our Company",
    items: [
      {
        title: "Shop",
        path: "/",
      },
      {
        title: "Library",
        external: true,
        path: "/",
      },
      {
        title: "Subscribe",
        external: true,
        path: "/",
      },
      {
        title: "About Us",
        external: true,
        path: "/",
      },
      {
        title: "Advertise",
        external: true,
        path: "/",
      },
    ],
  },
  {
    title: "Customer Service",
    items: [
      {
        title: "Contact Us",
        path: "#",
      },
      {
        title: "Return Policy",
        path: "#",
      },
      {
        title: "Shipping Policy",
        path: "#",
      },
      {
        title: "Privacy Policy",
        path: "#",
      },
      {
        title: "Terms Of Use",
        path: "#",
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        title: "Facebook",
        path: "#",
        icon: <SlSocialFacebook color={indigo[700]} />,
      },
      {
        title: "Twitter",
        path: "#",
        icon: <SlSocialTwitter color={blue[700]} />,
      },
      {
        title: "Instagram",
        path: "#",
        icon: <SlSocialInstagram color={pink[700]} />,
      },
      {
        title: "YouTube",
        path: "#",
        icon: <SlSocialYoutube color="red" />,
      },
      {
        title: "LinkedIn",
        path: "#",
        icon: <SlSocialLinkedin color={blue[900]} />,
      },
    ],
  },
];

const Footer: FC = () => (
  <Box sx={{ backgroundColor: "white" }}>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={3}>
        {sections.map(section => (
          <Grid key={section.title} item xs={12} md={3}>
            <List
              dense
              disablePadding
              subheader={
                <ListSubheader
                  disableGutters
                  sx={{ textTransform: "uppercase" }}>
                  {section.title}
                </ListSubheader>
              }>
              {section.items.map(item => {
                const linkProps = item.path
                  ? item.external
                    ? {
                        component: "a",
                        href: item.path,
                        target: "_blank",
                      }
                    : {
                        component: Link,
                        href: item.path,
                      }
                  : {};

                return (
                  <ListItemButton disableGutters disableRipple>
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <Link
                      color="inherit"
                      variant="body1"
                      underline="none"
                      {...linkProps}>
                      <ListItemText primary={item.title} />
                    </Link>
                  </ListItemButton>
                );
              })}
            </List>
          </Grid>
        ))}
        <Grid item xs={12} md={3}>
          <Typography
            color="text.secondary"
            variant="subtitle2"
            textTransform="uppercase"
            mb={2}>
            Newsletter
          </Typography>
          <Stack spacing={1.5}>
            <Typography variant="body2">
              Subscribe to receive updates, access to exclusive deals, and more.
            </Typography>
            <TextField label="Enter Your Email Address" />
            <Button fullWidth color="primary" variant="contained" size="large">
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
    <Divider />
    <Box py={4}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ md: "center", xs: "flex-start" } as any}
          gap={3}>
          <Logo />
          <Typography variant="caption">
            Copyright © 2023 RETROMOTIVE All Rights Reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default Footer;
