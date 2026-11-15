import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const garnetta = localFont({
  src: "../public/fonts/Garnetta.woff2",
  variable: "--font-garnetta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TGFDestinations",
    template: "%s | TGFDestinations",
  },
  description:
    "Explore curated luxury travel experiences and bespoke itineraries.",
  metadataBase: new URL("https://tgfd-delta.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garnetta.variable} min-h-screen flex flex-col`}>
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}