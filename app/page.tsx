import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Magazine from "@/components/Magazine";

export const metadata: Metadata = {
  title: "TGFD | 2026 Collection",
  description:
    "Explore curated luxury travel experiences and bespoke itineraries. Your next chapter begins with TGFDestinations.",
  openGraph: {
    title: "Travel With TGFD",
    description:
      "Discover our world of bespoke travel excellence.",
    url: "/",
    siteName: "TGFD",
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
    title: "TTravel With TGFD",
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