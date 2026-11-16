
import Button from "@/components/ui/Button";

export default function Magazine() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-6 py-12 md:py-20">
      <div className="w-full max-w-[1280px] flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-[var(--primary)] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
            Travel Advisory | Safety | Excellence
          </span>

          <h1 className="text-4xl md:text-6xl font-heading italic text-[var(--foreground)] mb-6 leading-tight">
            ⁠⁠TGFD Brochure{" "}
            <span className="font-body not-italic font-light opacity-60">
              | 2026 Collection
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-base opacity-70 leading-relaxed font-light mb-10">
            Experience the art of travel. Flip through our digital brochure
            to discover why you should travel with us
          </p>

          {/* GetYourGuide CTA */}
          <Button
            variant="outline"
            href="https://www.getyourguide.com?partner_id=PNUBATW&cmp=share_to_earn"
            className="w-full sm:w-auto"
          >
            Book activities on GetYourGuide
          </Button>

        </div>

        {/* Digital Brochure */}
        <div className="group relative w-full h-[500px] md:h-auto md:aspect-[16/9] bg-[var(--surface)] p-1 rounded-2xl shadow-[0_40px_100px_-20px_rgba(58,42,18,0.25)] border border-white/50 overflow-hidden transition-all duration-500">

          <iframe
            src="https://heyzine.com/flip-book/bf41439bfc.html"
            title="TGFDestinations 2026 Travel Collection"
            className="w-full h-[103%] md:h-[105%] rounded-xl bg-[var(--background)] border-0"
            allowFullScreen
          />

          {/* Interactive Viewer Label */}
          <div className="absolute top-4 left-4 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="bg-[var(--foreground)]/80 backdrop-blur-sm text-[var(--primary)] text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Interactive Viewer
            </span>
          </div>

          {/* Decorative Background */}
          <div className="absolute -z-10 inset-0 bg-[var(--primary)]/10 blur-3xl rounded-full translate-y-20" />

        </div>

        {/* Instructions */}
        <p className="mt-10 text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 animate-pulse">
          Scroll to flip · Tap to expand
        </p>

      </div>
    </section>
  );
}
