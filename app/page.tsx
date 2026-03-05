import { Metadata } from "next";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

// ================= SEO & OPEN GRAPH METADATA =================
export const metadata: Metadata = {
  title: "TGFDestinations | 2026 Collection",
  description: "Explore curated luxury travel experiences and bespoke itineraries. Your next chapter begins with TGFDestinations.",
  metadataBase: new URL("https://tgfd-delta.vercel.app/"),
  openGraph: {
    title: "TGFDestinations | 2026 Travel Collection",
    description: "Discover our world of bespoke travel and exclusive retreats.",
    url: "/",
    siteName: "TGFDestinations",
    images: [
      {
        url: "/TGFD-og.jpeg",
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

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2348103107194?text=Hello%20TGF%20Destinations!%20I%20just%20viewed%20your%202026%20Collection%20and%20would%20love%20to%20plan%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C7A86E] text-[#EAF7FE] px-7 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#C7A86E]/20 hover:bg-[#b8985d] hover:-translate-y-0.5 transition-all active:scale-95 text-center"
          >
            Let’s plan your trip
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
              TGFDestinations <span className="font-sans not-italic font-light opacity-60">| 2026 Collection</span>
            </h1>
            <p className="max-w-xl mx-auto text-sm md:text-base opacity-70 leading-relaxed font-light">
              Experience the art of travel. Flip through our digital brochure to 
              discover curated escapes designed for the modern travel lover.
            </p>
          </div>

          {/* Brochure/Iframe Wrapper - Responsive Optimized */}
          <div className="group relative w-full h-[500px] md:h-auto md:aspect-[16/9] bg-white p-1 rounded-2xl shadow-[0_40px_100px_-20px_rgba(58,42,18,0.25)] border border-white/50 overflow-hidden transition-all duration-500">
            
            {/* The Iframe with height scaling to hide bottom bar branding */}
            <iframe
              src="https://heyzine.com/flip-book/8ece0c64b5.html"
              className="w-full h-[103%] md:h-[105%] rounded-xl bg-[#EAF7FE] border-0"
              allowFullScreen
            ></iframe>
            
            {/* Decorative Overlay Label (Visible on Hover) */}
            <div className="absolute top-4 left-4 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bg-[#3A2A12]/80 backdrop-blur-sm text-[#C7A86E] text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Interactive Viewer
              </span>
            </div>

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
              TGFDestinations
            </p>
            <p className="text-[10px] opacity-40 font-medium text-center md:text-left">
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