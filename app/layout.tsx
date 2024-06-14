import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

// from Next.js
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

// from me
const ginto = localFont({
  src: "./fonts/ginto-semibold.woff",
  variable: "--font-ginto",
});
const whitney = localFont({
  src: [
    {
      path: "./fonts/whitney-light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/whitney-book.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/whitney-medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/whitney-semibold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-whitney",
});

export const metadata: Metadata = {
  title: "Discord Clone BuildUI",
  description: "From the course Tailwind Mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ginto.variable} ${whitney.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
