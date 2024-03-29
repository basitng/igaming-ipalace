import "@/styles/globals.css";
import { createTheme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
