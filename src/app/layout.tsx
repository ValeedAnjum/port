"use client";

import { MuiThemeProvider } from "@/providers";

import { Albert_Sans } from "next/font/google";
import "./global.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable}`}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
