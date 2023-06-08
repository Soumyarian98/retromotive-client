import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { FiMap } from "react-icons/fi";

const Hotspot: FC<{
  top: number | string;
  left: number | string;
  title: string | ReactNode;
}> = ({ top, left, title }) => {
  return (
    <Tooltip arrow title={title} placement="top">
      <Box component="span" className="pin" sx={{ top, left }}></Box>
    </Tooltip>
  );
};

const HotSpotImage = () => {
  return (
    <div>
      <Box component="div" position="relative">
        <Box
          component="img"
          src="https://collectingcars.imgix.net/020848/20230517-Porsche-930-SWZ682-Edit-46.jpg?fit=fillmax&amp;auto=format,compress&amp;cs=srgb&amp;q=85"
          sx={{ width: "100%" }}
        />
        <Hotspot
          top={"60%"}
          left="25%"
          title={<Typography>Data 1</Typography>}
        />
        <Hotspot
          top={"50%"}
          left="60%"
          title={<Typography>Data 2</Typography>}
        />
        <Hotspot
          top={"75%"}
          left="60%"
          title={<Typography>Data 3</Typography>}
        />
        <Hotspot
          top={300}
          left={200}
          title={
            <Stack alignItems="center">
              <IconButton>
                <FiMap color="#efefef" />
              </IconButton>
              <Typography>Viena, Italy</Typography>
            </Stack>
          }
        />
      </Box>
    </div>
  );
};

export default HotSpotImage;
