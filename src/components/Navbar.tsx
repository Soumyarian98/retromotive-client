import {
  AppBar,
  Container,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <AppBar
      color="inherit"
      sx={{ bgcolor: "#ffffff", backdropFilter: "blur(5px)" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
          <Logo />
          <Stack direction="row">
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
          </Stack>
          <Stack direction="row" gap={2}>
            <IconButton color="primary">
              <FiUser />
            </IconButton>
            <IconButton color="primary">
              <FiSearch />
            </IconButton>
            <IconButton color="primary">
              <FiShoppingBag />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
