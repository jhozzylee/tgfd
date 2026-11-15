import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Magazine from "@/components/Magazine";

export const metadata: Metadata = {
  title: "TGFD | 2026 Collection",
  description:
    "Explore curated luxury travel experiences and bespoke itineraries. Your next chapter begins with TGFDestinations.",
  openGraph: {
    title: "TGFDestinations | 2026 Travel Collection",
    description:
      "Discover our world of bespoke travel and exclusive retreats.",
    url: "/",
    siteName: "TGFDestinations",
    images: [
      {
        url: "/TGFD-og.jpg",
        width: 963,
        height: 1280,
        alt: "TGFDestinations Luxury Travel Brochure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TGFDestinations | 2026 Collection",
    description: "Explore curated luxury travel experiences.",
    images: ["/TGFD-og.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Magazine />
    </>
  );
}