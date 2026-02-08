"use client";

import { Inter } from "next/font/google";
import "../styles/index.css";
import Header from "../components/website/Header";
import Footer from "../components/website/Footer/footer";
import ScrollToTop from "../components/website/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] `}>
        <div className="isolate">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
