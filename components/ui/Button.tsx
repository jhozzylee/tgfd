import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300";

  const variants = {
    primary:
      "bg-[#C7A86E] text-white hover:bg-[#B8985D] shadow-lg shadow-[#C7A86E]/20",
    secondary:
      "bg-[#3A2A12] text-white hover:bg-[#4D3A20]",
    outline:
      "border border-[#3A2A12]/20 text-[#3A2A12] hover:bg-[#C7A86E] hover:text-white hover:border-[#C7A86E]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : "active:scale-[0.97]"
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
}
