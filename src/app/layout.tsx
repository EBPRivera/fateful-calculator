import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fateful Calculation",
  description:
    "A simple tool for calculating the mean value of a check following the rules of the Fateful Architecture System",
};

interface RootLayoutProps {
  children: React.JSX.Element;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
