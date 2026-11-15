import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  // Modern, editorial baseline styling (less bulky, more refined)
  const baseStyles =
    "inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A86E]/40";

  const sizes = {
    sm: "px-4 py-2 text-xs tracking-wider rounded-lg",
    md: "px-6 py-3 text-xs tracking-wider rounded-xl",
    lg: "px-8 py-4 text-sm tracking-widest rounded-xl",
  };

  const variants = {
    primary:
      "bg-[#C7A86E] text-white hover:bg-[#B8985D] shadow-sm shadow-[#C7A86E]/15 hover:shadow-md hover:shadow-[#C7A86E]/20",
    secondary:
      "bg-[#3A2A12] text-white hover:bg-[#4D3A20] shadow-sm",
    outline:
      "border border-[#E4DED3] bg-transparent text-[#3A2A12] hover:border-[#C7A86E] hover:bg-[#C7A86E]/10",
    ghost:
      "bg-transparent text-[#3A2A12] hover:bg-[#C7A86E]/10",
  };

  const styles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${
    disabled
      ? "opacity-40 cursor-not-allowed shadow-none"
      : "active:scale-[0.98]"
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