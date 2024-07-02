import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

const grandSlang = localFont({
  src: [
    {
      path: "../public/fonts/GrandSlang-B-Side.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--grandSlang",
});

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/ppneuemontreal-book.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--neueMontreal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milan-stanojevic-portfolio.vercel.app/"),
  title: "Milan Stanojevic",
  description: "Software developer, frontend developer.",
  alternates: {
    canonical: "/",
    languages: {
        "en-US": "/en-US",
    },
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${grandSlang.variable} ${neueMontreal.variable}`}>
        <Navbar />
        {children}
        <SpeedInsights />
        <ToastContainer />
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-638T9MMTET" />
    </html>
  );
}
