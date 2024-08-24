
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { any, object } from "prop-types";
import { AppContextWrapper } from "@/context/state";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "قسطبان",
  description: "با من  قسطات یادت نمیره",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="fa" dir="rtl" className="">
      <body className={inter.className}>
        <AppContextWrapper>
          {children}
        </AppContextWrapper >
      </body>
    </html>
  );
}
