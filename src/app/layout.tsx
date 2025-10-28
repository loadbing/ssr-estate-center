import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generateToken } from "./server/generateToken/generateToken";
import ClientLayout from "./clientLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estate Center",
  description: "Technical test for Million Luxury",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await generateToken()

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <ClientLayout token={token}>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
