import { Quantico, Silkscreen } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const silkscreen = Silkscreen({
  variable: "--font-BitcountGridDouble",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Titan Watch Store",
  description: "Timeless Elegance on Your wrist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quantico.className}`}>
        {/* <TooltipProvider>{children}</TooltipProvider> */}
        <SessionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Bottom />
        </SessionProvider>
      </body>
    </html>
  );
}
