import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const font = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: "dark",
            primary: {
              main: "#000",
            },
            secondary: {
              main: "#D14836",
            },
          },
          typography: {
            fontFamily: font.style.fontFamily,
          },
        })}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
