import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Red_Hat_Display } from "next/font/google";
import type { ReactNode } from "react";

const redHatDisplay: NextFont = Red_Hat_Display({
  weight: ["500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Order Summary Component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
