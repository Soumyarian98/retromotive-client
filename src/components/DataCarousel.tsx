import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlArrowRightCircle } from "react-icons/sl";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { nanoid } from "nanoid";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  MobileStepper,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CustomIconButton from "./CustomIconButton";
import { grey } from "@mui/material/colors";

const variant = {
  initial: { y: "200%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
  exit: {
    y: "-200%",
    opacity: 0,
    transition: { duration: 0.75, ease: "easeInOut" },
  },
};

const data = [
  {
    id: nanoid(),
    title: "NEVER MISS A DRIVE. SUBSCRIBE TO RETROMOTIVE TODAY.",
    description:
      "Join the Retromotive squad and enjoy the best automotive content right to your mailbox.",
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18ANNUAL_1.jpg",
    button: "Subscribe Now",
  },
  {
    id: nanoid(),
    title: "DOWNLOAD THE APP TO READ NEW ARTICLES UPLOADED WEEKLY.",
    description:
      "Retromotive’s brand-new app update is the perfect place for petrolheads! With a 12-month digital subscription, you have full access to the app.",
    image:
      "https://retromotive.co/wp-content/uploads/2023/03/NEW_Subs_Banners_V18DIGITAL_1.jpg",
    button: "Download Now",
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const DataCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <Box
      component="section"
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundImage: 'url("/background.svg")',
      }}>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          py: "2vw",
        }}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Stack justifyContent="center" sx={{ height: "100%" }}>
              <AnimatePresence mode="wait">
                {data.map((item, i) => {
                  if (i !== index) return null;
                  return (
                    <Box component="div" key={item.id} sx={{ width: "75%" }}>
                      <Box component="div" sx={{ overflow: "hidden" }}>
                        <Typography
                          component={motion.p}
                          variants={variant}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variant="h5"
                          fontWeight="700">
                          {item.title}
                        </Typography>
                      </Box>
                      <Box component="div" sx={{ overflow: "hidden", mt: 2 }}>
                        <Typography
                          component={motion.p}
                          variants={variant}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variant="body2"
                          color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>
                      <Box component="div" sx={{ overflow: "hidden", mt: 6 }}>
                        <motion.div
                          variants={variant}
                          initial="initial"
                          animate="animate"
                          exit="exit">
                          <Button
                            endIcon={<SlArrowRightCircle />}
                            size="large"
                            color="secondary"
                            variant="outlined">
                            {item.button}
                          </Button>
                        </motion.div>
                      </Box>
                    </Box>
                  );
                })}
              </AnimatePresence>
            </Stack>
          </Grid>
          <Grid item lg={6}>
            <AnimatePresence mode="wait">
              {data.map((d, i) => {
                if (i !== index) return null;
                return (
                  <motion.div
                    key={d.id}
                    initial={{
                      WebkitMaskImage: hiddenMask,
                      maskImage: hiddenMask,
                    }}
                    animate={{
                      WebkitMaskImage: visibleMask,
                      maskImage: visibleMask,
                      transition: { duration: 0.75, ease: "easeInOut" },
                    }}
                    exit={{
                      WebkitMaskImage: hiddenMask,
                      maskImage: hiddenMask,
                      transition: { duration: 0.75, ease: "easeInOut" },
                    }}>
                    <Box
                      component="img"
                      src={d.image}
                      sx={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </Grid>
        </Grid>
        <Paper>
          <MobileStepper
            elevation={0}
            variant="dots"
            steps={2}
            position="static"
            activeStep={index}
            nextButton={
              <CustomIconButton
                bgcolor={grey[100]}
                size="large"
                color="primary"
                onClick={() =>
                  setIndex(p => (p === data.length - 1 ? 0 : p + 1))
                }>
                <FiChevronRight />
              </CustomIconButton>
            }
            backButton={
              <CustomIconButton
                bgcolor={grey[100]}
                color="primary"
                size="large"
                onClick={() =>
                  setIndex(p => (p === 0 ? data.length - 1 : p - 1))
                }>
                <FiChevronLeft />
              </CustomIconButton>
            }
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default DataCarousel;
