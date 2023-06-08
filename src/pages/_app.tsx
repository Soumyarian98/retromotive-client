import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Nunito } from "next/font/google";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

const font1 = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const font2 = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font2.style.fontFamily}, ${font1.style.fontFamily};
        }
      `}</style>
      <ThemeProvider
        theme={createTheme({
          palette: {
            // mode: "dark",
          },
          typography: {
            fontFamily: font2.style.fontFamily,
            subtitle1: {
              fontFamily: font1.style.fontFamily,
            },
            h1: {
              fontFamily: font1.style.fontFamily,
            },
            h2: {
              fontFamily: font1.style.fontFamily,
            },
            h3: {
              fontFamily: font1.style.fontFamily,
            },
            h4: {
              fontFamily: font1.style.fontFamily,
            },
            h5: {
              fontFamily: font1.style.fontFamily,
            },
            h6: {
              fontFamily: font1.style.fontFamily,
            },
          },

          shadows: [
            "none",
            "0px 1px 2px rgba(0, 0, 0, 0.08)",
            "0px 1px 5px rgba(0, 0, 0, 0.08)",
            "0px 1px 8px rgba(0, 0, 0, 0.08)",
            "0px 1px 10px rgba(0, 0, 0, 0.08)",
            "0px 1px 14px rgba(0, 0, 0, 0.08)",
            "0px 1px 18px rgba(0, 0, 0, 0.08)",
            "0px 2px 16px rgba(0, 0, 0, 0.08)",
            "0px 3px 14px rgba(0, 0, 0, 0.08)",
            "0px 3px 16px rgba(0, 0, 0, 0.08)",
            "0px 4px 18px rgba(0, 0, 0, 0.08)",
            "0px 4px 20px rgba(0, 0, 0, 0.08)",
            "0px 5px 22px rgba(0, 0, 0, 0.08)",
            "0px 5px 24px rgba(0, 0, 0, 0.08)",
            "0px 5px 26px rgba(0, 0, 0, 0.08)",
            "0px 6px 28px rgba(0, 0, 0, 0.08)",
            "0px 6px 30px rgba(0, 0, 0, 0.08)",
            "0px 6px 32px rgba(0, 0, 0, 0.08)",
            "0px 7px 34px rgba(0, 0, 0, 0.08)",
            "0px 7px 36px rgba(0, 0, 0, 0.08)",
            "0px 8px 38px rgba(0, 0, 0, 0.08)",
            "0px 8px 40px rgba(0, 0, 0, 0.08)",
            "0px 8px 42px rgba(0, 0, 0, 0.08)",
            "0px 9px 44px rgba(0, 0, 0, 0.08)",
            "0px 9px 46px rgba(0, 0, 0, 0.08)",
          ],
        })}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
