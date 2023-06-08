import type { FC, ReactNode } from "react";
import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/system/colorManipulator";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material/styles/createTheme";

import Logo from "./Logo";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { FiMenu } from "react-icons/fi";
import { ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";

interface Item {
  disabled?: boolean;
  external?: boolean;
  popover?: ReactNode;
  path?: string;
  title: string;
}

const items: Item[] = [
  {
    title: "Components",
    path: "/",
  },
  {
    title: "Pages",
    path: "/",
  },
  {
    title: "Docs",
    path: "/",
  },
];

const TOP_NAV_HEIGHT = 64;

interface TopNavProps {
  onMobileNavOpen?: () => void;
}

export const TopNav: FC<TopNavProps> = props => {
  const { onMobileNavOpen } = props;
  const location = useRouter();
  const pathname = location.asPath;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [elevate, setElevate] = useState<boolean>(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback((): void => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });

  return (
    <Box
      component="header"
      sx={{
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        pt: 2,
        zIndex: theme => theme.zIndex.appBar,
      }}>
      <Container
        maxWidth="lg"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "transparent",
          borderRadius: 2.5,
          boxShadow: "none",
          transition: theme =>
            theme.transitions.create("box-shadow, background-color", {
              easing: theme.transitions.easing.easeInOut,
              duration: 200,
            }),
          ...(elevate && {
            backgroundColor: theme =>
              alpha(theme.palette.background.paper, 0.9),
            boxShadow: 8,
          }),
        }}>
        <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}>
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1 }}>
            <Stack
              alignItems="center"
              direction="row"
              display="inline-flex"
              spacing={1}
              sx={{ textDecoration: "none" }}>
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  height: 24,
                  width: 24,
                }}>
                <Logo />
              </Box>
            </Stack>
            <Chip label="v6.4.0" size="small" />
          </Stack>
          {mdUp && (
            <Stack alignItems="center" direction="row" spacing={2}>
              <Box component="nav" sx={{ height: "100%" }}>
                <Stack
                  component="ul"
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={1}
                  sx={{
                    height: "100%",
                    listStyle: "none",
                    m: 0,
                    p: 0,
                  }}>
                  <>
                    {items.map(item => {
                      const checkPath = !!(item.path && pathname);
                      const partialMatch = checkPath
                        ? pathname.includes(item.path!)
                        : false;
                      const exactMatch = checkPath
                        ? pathname === item.path
                        : false;
                      const active = item.popover ? partialMatch : exactMatch;

                      return (
                        <div>
                          <ListItemButton>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                          {/* <TopNavItem
                            active={active}
                            external={item.external}
                            key={item.title}
                            path={item.path}
                            popover={item.popover}
                            title={item.title}
                          /> */}
                        </div>
                      );
                    })}
                  </>
                </Stack>
              </Box>
            </Stack>
          )}
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            sx={{ flexGrow: 1 }}>
            <Button
              component="a"
              size={mdUp ? "medium" : "small"}
              href="https://mui.com/store/items/devias-kit-pro"
              target="_blank"
              variant="contained">
              Purchase Now
            </Button>
            {!mdUp && (
              <IconButton onClick={onMobileNavOpen}>
                <SvgIcon fontSize="small">
                  <FiMenu />
                </SvgIcon>
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
