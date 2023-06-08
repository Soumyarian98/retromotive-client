import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { carsData } from "@/data/carsData";
import { FiHeart, FiVolume2, FiVolumeX } from "react-icons/fi";
import { RiAuctionLine } from "react-icons/ri";
import { FaChevronCircleRight } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import useCarousel from "@/hooks/useCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const CarMedias = ({ images }: { images: string[] }) => {
  const { index, next } = useCarousel(images.length);

  return (
    <>
      <AnimatePresence mode="wait">
        {images.map((image, i) => {
          if (i !== index) return null;
          return (
            <Box
              key={i}
              component={motion.div}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <CardMedia component="img" src={image} />
            </Box>
          );
        })}
      </AnimatePresence>
      <IconButton
        onClick={() => next()}
        sx={{
          position: "absolute",
          zIndex: 10,
          right: 4,
          top: "50%",
          transform: "translateY(-50%)",
        }}>
        <FaChevronCircleRight />
      </IconButton>
    </>
  );
};

const CarCard = ({ item }: any) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const router = useRouter();
  return (
    <Card elevation={1}>
      <Box component="div" sx={{ position: "relative", overflow: "hidden" }}>
        <CardActionArea onClick={() => router.push(`/cars/1`)}>
          <CarMedias images={item.imageUrls} />
        </CardActionArea>
        <IconButton sx={{ position: "absolute", top: 4, right: 4, zIndex: 10 }}>
          <FiHeart stroke="#fff" fill={"#00000040"} />
        </IconButton>
        <IconButton
          onClick={() => {
            setIsPlaying(prev => !prev);
            if (audioRef.current) {
              if (!isPlaying) {
                audioRef.current.play();
              } else {
                audioRef.current.pause();
              }
            }
          }}
          sx={{
            position: "absolute",
            bottom: 4,
            right: 4,
            zIndex: 10,
          }}>
          {isPlaying ? (
            <FiVolume2 stroke="#fff" fill={"#00000040"} />
          ) : (
            <FiVolumeX stroke="#fff" fill={"#00000040"} />
          )}
        </IconButton>
        <Box ref={audioRef} component="audio" sx={{ display: "none" }} loop>
          <source src="/mustang.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </Box>
      </Box>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Typography
              fontWeight={700}
              variant="subtitle1"
              textTransform="uppercase">
              {item.brand}
            </Typography>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                mx: 0.5,
                transform: "scale(0.8)",
              }}>
              •
            </Box>
            <Typography fontWeight={700} variant="subtitle1">
              {item.year}
            </Typography>
          </Stack>
          <Typography fontWeight={700} variant="subtitle1">
            {item.price}
          </Typography>
        </Stack>
        <Typography color="text.secondary" sx={{ mt: 0.25 }} variant="body2">
          {item.capitalizedName}
        </Typography>
        <Stack direction="row" gap={1} sx={{ mt: 3 }} flexWrap="wrap">
          <Chip size="small" label={item.driveType} avatar={<GiCarWheel />} />

          <Chip
            size="small"
            avatar={<RiAuctionLine />}
            label={
              item.bids === "No Reserve" ? "No Reserve" : item.bids + " Bids"
            }
          />
          <Chip
            size="small"
            label={item.location}
            avatar={
              <Avatar src="https://collectingcars.com/assets/img/flags/AU.svg"></Avatar>
            }
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

const ExploreCars = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        py: "2vw",
      }}>
      <Typography variant="h4" fontWeight={800} textAlign="center">
        EXPLORE
      </Typography>

      <Grid container spacing={4}>
        {carsData.map(item => (
          <Grid item xs={12} lg={6} key={item.id}>
            <CarCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExploreCars;
