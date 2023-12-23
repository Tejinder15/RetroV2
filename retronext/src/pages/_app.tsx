import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Poppins, Carter_One } from "next/font/google";
import AuthWrapper from "@/components/authWrapper";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppin",
});

const carter = Carter_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-carter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${poppins.variable} ${carter.variable} font-sans`}>
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
        <Toaster position="bottom-center" />
      </div>
    </Provider>
  );
}
