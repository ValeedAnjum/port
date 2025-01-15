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
      <meta
        name="google-site-verification"
        content="UmQ85SFq4H3Bs0OgntXkMbvmCR12Rm7yyg6ZejOUXg0"
      />
      <body className={`${albertSans.variable}`}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
