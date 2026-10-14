import { Quantico, Playfair_Display, Inter } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Titan Watch Store",
  description: "Timeless Elegance on Your wrist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quantico.variable} ${playfair.variable} ${inter.variable} font-heading bg-gray-200`}>
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
