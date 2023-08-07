import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GlobalLayout = ({ children }: Props) => {
  const router = useRouter();

  if (router.asPath.includes("/studio")) return <>{children}</>;

  return (
    <Box component="main" sx={{ bgcolor: "#FCFCFC" }}>
      <Navbar />
      <Box component="section" sx={{ minHeight: "100vh" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default GlobalLayout;
