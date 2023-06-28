import {
  BottomNavigation,
  BottomNavigationAction,
  CardContent,
  Drawer,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { FiFilter } from "react-icons/fi";

interface Props {
  children: React.ReactNode;
}

const MobileFilter: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => setOpen(true)}
          label={<Typography>Categories</Typography>}
          icon={<FiFilter size={20} />}
        />
      </BottomNavigation>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <CardContent>{children}</CardContent>
      </Drawer>
    </>
  );
};

export default MobileFilter;
