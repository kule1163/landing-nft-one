import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/montserrat-alternates";
import "@fontsource/cormorant-garamond";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
