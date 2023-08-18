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
} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { grey } from "@mui/material/colors";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import CartButton from "./CartButton";
import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";
import ElevationScroll from "./ElevateOnScroll";

const menus = [
  {
    id: nanoid(),
    title: "Subscribe",
    redirectLink: "/subscribe",
  },
  {
    id: nanoid(),
    title: "Magazines",
    redirectLink: "/magazines",
  },
  {
    id: nanoid(),
    title: "Articles",
    redirectLink: "/articles",
  },
  {
    id: nanoid(),
    title: "Shop",
    redirectLink: "/shop",
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
    <Box>
      <ElevationScroll>
        <AppBar className="w-full fixed h-[96px] md:[128px] z-[100] bg-[#FCFCFC] text-gray-950">
          <Container className="h-full">
            <div className="flex items-center justify-between h-full">
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
            </div>
          </Container>
        </AppBar>
      </ElevationScroll>

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
    </Box>
  );
};

export default Navbar;
