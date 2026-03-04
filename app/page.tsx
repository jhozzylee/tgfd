import { Metadata } from "next";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

// ================= SEO & OPEN GRAPH METADATA =================
// This is what social media platforms (WhatsApp, LinkedIn, etc.) read.
export const metadata: Metadata = {
  title: "TGF Destinations | 2026 Collection",
  description: "Explore curated luxury travel experiences and bespoke itineraries. Your next chapter begins with TGF Destinations.",
  metadataBase: new URL("https://tgf-destinations.vercel.app"), // CHANGE THIS TO YOUR ACTUAL DOMAIN
  openGraph: {
    title: "TGF Destinations | 2026 Travel Collection",
    description: "Discover our world of bespoke travel and exclusive retreats.",
    url: "/",
    siteName: "TGF Destinations",
    images: [
      {
        url: "/TGFD-og.jpeg", // Must be in the /public folder
        width: 1200,
        height: 630,
        alt: "TGF Destinations Luxury Travel Brochure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TGF Destinations | 2026 Collection",
    description: "Explore curated luxury travel experiences.",
    images: ["/TGFD-og.jpeg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#EAF7FE] text-[#3A2A12] font-sans">
      
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#EAF7FE]/80 border-b border-[#3A2A12]/5 px-6 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center transition-transform hover:scale-[1.02] duration-300">
            <Image
              src="/logo.svg" 
              alt="TGF Destinations Logo"
              width={95} 
              height={32}
              priority
              className="object-contain"
            />
          </div>

          {/* Luxury CTA */}
          <a
            href="tel:+2348103107194"
            className="bg-[#C7A86E] text-[#EAF7FE] px-7 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#C7A86E]/20 hover:bg-[#b8985d] hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Plan Your Journey
          </a>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <section className="flex-grow flex flex-col items-center justify-center px-6 py-12 md:py-20">
        
        <div className="w-full max-w-[1280px] flex flex-col items-center">
          
          {/* Travel Contextual Heading */}
          <div className="text-center mb-12">
            <span className="text-[#C7A86E] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
              Travel Advisory Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-serif italic text-[#3A2A12] mb-6 leading-tight">
              TGF Destinations <span className="font-sans not-italic font-light opacity-60">| 2026 Collection</span>
            </h1>
            <p className="max-w-xl mx-auto text-sm md:text-base opacity-70 leading-relaxed font-light">
              Experience the art of travel. Flip through our digital brochure to 
              discover curated escapes designed for the modern explorer.
            </p>
          </div>

          {/* Brochure/Iframe Wrapper */}
          <div className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-white p-1 rounded-2xl shadow-[0_40px_100px_-20px_rgba(58,42,18,0.25)] border border-white/50 overflow-hidden">
            <iframe
              src="https://heyzine.com/flip-book/2c159cf48d.html"
              className="w-full h-full rounded-xl bg-[#EAF7FE]"
              allowFullScreen
            ></iframe>
            
            {/* Background glow for depth */}
            <div className="absolute -z-10 inset-0 bg-[#C7A86E]/10 blur-3xl rounded-full translate-y-20"></div>
          </div>

          {/* Interactive Hint */}
          <p className="mt-10 text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 animate-pulse">
            Scroll to flip · Tap to expand
          </p>
        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full py-12 bg-white/10 mt-auto">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-[#3A2A12]/10 pt-10">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[11px] uppercase tracking-[0.2em] font-black text-[#3A2A12]">
              TGF Destinations
            </p>
            <p className="text-[10px] opacity-40 font-medium">
              © 2026 Crafted for the Modern Traveler.
            </p>
          </div>

          <div className="flex justify-center gap-10 text-xl text-[#3A2A12]/60">
            <a 
              href="https://www.instagram.com/tgfdestinations?igsh=MTVsYm92ZHRmdjlhaA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C7A86E] transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com/tgfdestinations" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C7A86E] transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.linkedin.com/company/tgfdestinations" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C7A86E] transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}