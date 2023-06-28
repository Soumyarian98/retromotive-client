import { useSyncExternalStore } from "react";
import { Backdrop, Box, CircularProgress, Fab } from "@mui/material";

const state = { open: false };
let notifiers = new Set<() => void>();

export const showPageLoader = () => {
  state.open = true;
  notifiers.forEach(n => n());
};

export const closePageLoader = () => {
  state.open = false;
  notifiers.forEach(n => n());
};

export const PageLoadingSpinner = () => {
  const open = useSyncExternalStore(
    notify => {
      notifiers.add(notify);
      return () => notifiers.delete(notify);
    },
    () => state.open,
    () => state.open
  );

  return (
    <Backdrop
      open={open}
      onClick={() => {}}
      sx={{
        zIndex: theme => theme.zIndex.modal + 1,
      }}>
      <Box sx={{ m: 1 }}>
        <Fab
          sx={{ background: theme => theme.palette.background.default }}
          size="small">
          <CircularProgress size="24px" />
        </Fab>
      </Box>
    </Backdrop>
  );
};
