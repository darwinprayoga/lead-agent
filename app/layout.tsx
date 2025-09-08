import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura-medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Lead Agent",
  description: "Professional lead generation services for real estate agents.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={futura.variable}>
      <body className="font-futura antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
