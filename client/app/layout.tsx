import type { Metadata } from "next";
import { Inter, Libre_Bodoni, Montserrat } from "next/font/google";
import "./globals.css";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-libre-bodoni",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Choose Your Plan | Transitstay",
  description: "Choose the Transitstay plan that works for you.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${libreBodoni.variable} ${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
