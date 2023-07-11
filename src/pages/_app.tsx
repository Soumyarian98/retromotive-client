import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Mulish } from "next/font/google";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import GlobalLayout from "@/layout/GlobalLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "next/router";
import { ClerkProvider } from "@clerk/nextjs";
import {
  PageLoadingSpinner,
  closePageLoader,
  showPageLoader,
} from "@/components/PageLoader";

const font1 = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const font2 = Mulish({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

Router.events.on("routeChangeStart", () => {
  showPageLoader();
});
Router.events.on("routeChangeComplete", ({}) => {
  closePageLoader();
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <style jsx global>{`
        html {
          font-family: ${font2.style.fontFamily}, ${font1.style.fontFamily};
        }
      `}</style>
      <ThemeProvider
        theme={createTheme({
          palette: {
            // mode: "dark",
            primary: {
              main: "#103fef",
            },
            // secondary: {
            //   dark: "#b2102f",
            //   main: "#ff1744",
            //   light: "#ff4569",
            // },
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
            button: {
              textTransform: "capitalize",
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
        <QueryClientProvider client={queryClient}>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
          <PageLoadingSpinner />
        </QueryClientProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjY4YWM5ZWIyOTFhN2ZkYjRhZjg1ZGM4NTIzMjA5N2YxM2FkYzk4ODViMjgyNTZlNzUyNmU3M2NlNmY1OTNhNmIwZGRjZTlkMTUzZmJjYWMwIiwiaWF0IjoxNjg4MDA4ODgyLjM4MDg1NSwibmJmIjoxNjg4MDA4ODgyLjM4MDg1OSwiZXhwIjoxNzE5NjMxMjgyLjM3NDY2NCwic3ViIjoiOTQ2OTM3NyIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AQpPZnEFVkq2poah2KdnKfi7lD0aMEyPBbIEHxJhb4pjqj8XcanQCNFGYc8kwbIJHV1-sg9eLBENv1NeN70
