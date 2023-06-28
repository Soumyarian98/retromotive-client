import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import Tilt from "react-parallax-tilt";

interface Props {
  image: string;
  title: string;
}

const ArticleCard = ({ image, title }: Props) => {
  return (
    <Tilt>
      <Card sx={{ position: "relative", minHeight: "500px" }}>
        <Box
          component="img"
          src={image}
          sx={{
            width: "auto",
            height: "100%",
          }}
        />
        <Stack
          sx={{
            position: "absolute",
            bottom: 0,
            p: 3,
            background:
              "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
          }}
          gap={3}
          alignItems="center">
          <Typography variant="h5" textAlign="center">
            {title}
          </Typography>
          <Button variant="contained" size="large">
            Read Article
          </Button>
        </Stack>
      </Card>
    </Tilt>
  );
};

export default ArticleCard;
