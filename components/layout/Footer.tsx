
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[var(--surface)]/10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-[var(--foreground)]/10 pt-10">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-body text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--foreground)]">
            TGFDestinations
          </p>

          <p className="font-body text-[10px] opacity-40 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Crafted for the Modern Traveler.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-10 text-xl text-[var(--foreground)]/60">
          <a
            href="https://www.instagram.com/__tgfd?dlrf=ZG5rNGpzYWZzMWd0&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[var(--primary)] transition-colors duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/tgfdestinations"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[var(--primary)] transition-colors duration-300"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/company/tgfdestinations"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--primary)] transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}
