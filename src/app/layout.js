import { Cormorant, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Bamboo Nails & Spa Hull",
    template: "%s | Bamboo Nails & Spa Hull",
  },
  description:
    "Professional nail salon in Anlaby Road, Hull offering BIAB, gel, nail extensions and artistic designs. Walk-ins welcome.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
