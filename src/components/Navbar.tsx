import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { FiLogIn, FiMenu, FiUser, FiX } from "react-icons/fi";
import { grey } from "@mui/material/colors";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import CartButton from "./CartButton";
import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";

const menus = [
  {
    id: nanoid(),
    title: "Shop",
    redirectLink: "/shop",
  },
  {
    id: nanoid(),
    title: "Subscribe",
    redirectLink: "/subscribe",
  },
  {
    id: nanoid(),
    title: "Article",
    redirectLink: "/articles",
  },
  {
    id: nanoid(),
    title: "Advertise",
    redirectLink: "/advertise",
  },
];

const Navbar = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const listItems = (
    <>
      {menus.map(m => {
        return (
          <ListItemButton
            key={m.id}
            onClick={() => router.push(m.redirectLink)}>
            <ListItemText primary={m.title} />
          </ListItemButton>
        );
      })}
    </>
  );

  return (
    <div>
      <AppBar
        color="inherit"
        sx={{ bgcolor: "#ffffff", backdropFilter: "blur(5px)" }}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", py: 1.5 }}>
            <Logo />
            <Stack direction="row" display={{ xs: "none", lg: "flex" }}>
              {listItems}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ xs: 1, md: 2 }}>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <Button sx={{ textTransform: "uppercase" }}>Login</Button>
                </SignInButton>
              )}
              <CartButton />
              <IconButton
                color="secondary"
                sx={{ display: { xs: "inline-flex", lg: "none" } }}
                onClick={() => setOpen(true)}>
                <FiMenu />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Stack
          sx={{ minWidth: "240px", p: 2 }}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}>
          <Box component="div" borderRadius="100%" bgcolor={grey[50]}>
            <IconButton
              onClick={() => setOpen(false)}
              color="secondary"
              size="large">
              <FiX />
            </IconButton>
          </Box>
        </Stack>
        <Divider />
        <Box component="div" sx={{ p: 2 }}>
          <List>
            <ListItemButton>
              <ListItemText primary="Shop" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Subscribe" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Article" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Advertise" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
