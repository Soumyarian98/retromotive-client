import React from "react";
import { nanoid } from "nanoid";
import { FiBookOpen, FiHeart } from "react-icons/fi";
import { SlArrowRightCircle } from "react-icons/sl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { sanityUrlBuiler } from "@/utils/sanityImageBuilder";

const data = [
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/07/COVERS1-large.jpg",
    title: "Volume 15",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/03/COVERS1-1-1024x1024.jpg",
    title: "Volume 16",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/COVERS1-large.jpg",
    title: "Volume 18",
    date: "March 2020 - April 2021",
  },
  {
    id: nanoid(),
    image:
      "https://retromotive.co/wp-content/uploads/2022/03/COVERS1_Grey-1024x1024.jpg",
    title: "Volume 19",
    date: "March 2020 - April 2021",
  },
];

const MagazineGrid = ({ quaterlies }: any) => {
  const { palette: p } = useTheme();
  return (
    <Container sx={{ overflow: "hidden", px: { xs: 0, md: 2 } }}>
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <Typography
          variant="h5"
          textAlign={{ xs: "left", md: "center" }}
          fontWeight={700}>
          Quaterlies
        </Typography>
        <VerticalTimeline lineColor={p.primary.main}>
          {quaterlies.map((item: any, index: any) => {
            return (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: "transparent",
                  boxShadow: "none",
                  borderRadius: "4px",
                  padding: "0",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${p.secondary.main}`,
                }}
                date={item.date}
                iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
                icon={<FiBookOpen />}
                className="vertical-timeline-element--work">
                <Card sx={{ height: "100%" }}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        color: "#fff",
                        zIndex: 100,
                      }}>
                      <IconButton>
                        <FiHeart stroke="#fff" />
                      </IconButton>
                    </Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        src={sanityUrlBuiler(item.featuredImage)
                          .width(600)
                          .url()}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <CardContent>
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="space-between">
                          <div>
                            <Typography variant="h6" fontWeight={600}>
                              {item.title}
                            </Typography>
                            <Typography
                              component="div"
                              variant="body2"
                              color="textSecondary">
                              Retromotive
                            </Typography>
                          </div>
                          <Typography
                            variant="h6"
                            fontSize="18px"
                            component="div">
                            A${item.price[0].value}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Card>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
        <Button
          size="large"
          variant="contained"
          endIcon={<SlArrowRightCircle />}>
          View All Magazine
        </Button>
      </Stack>
    </Container>
  );
};

export default MagazineGrid;
