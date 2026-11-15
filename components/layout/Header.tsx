
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-transparent px-6 py-5 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--foreground)]/5 ">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        <Link href="/" aria-label="Go to homepage" className="flex items-center">
        <Image
            src="/logo.svg"
            alt="TGFDestinations Logo"
            width={60}
            height={32}
            priority
            className="object-contain"
        />
        </Link>

        <Button
          href="https://wa.me/2348103107194?text=Hi%20team%20TGFD!%20I%20would%20love%20to%20plan%20a%20trip%20with%20you."
          variant="primary"
          
        >
          Let's plan your trip
        </Button>
      </div>
    </header>
  );
}
