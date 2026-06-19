import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoVariant = "primary" | "white" | "black" | "cyan";

const logoSources: Record<LogoVariant, string> = {
  primary: logos.primary,
  white: logos.white,
  black: logos.black,
  cyan: logos.cyan,
};

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  iconOnly?: boolean;
};

export function Logo({
  variant = "primary",
  className,
  iconOnly = false,
}: LogoProps) {
  const src = iconOnly
    ? variant === "cyan"
      ? logos.iconCyan
      : variant === "white"
        ? logos.iconWhite
        : logos.iconBlack
    : logoSources[variant];

  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt="Maximillian Labs"
        width={iconOnly ? 40 : 220}
        height={iconOnly ? 40 : 56}
        className={cn(
          "h-auto w-auto",
          iconOnly
            ? "h-8 w-8 md:h-9 md:w-9"
            : "h-9 w-auto md:h-11 lg:h-12",
        )}
        priority
      />
    </Link>
  );
}
