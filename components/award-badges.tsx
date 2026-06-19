import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { logos } from "@/lib/brand";

function BrandIcon({ className }: { className?: string }) {
  return (
    <Image
      src={logos.iconCyan}
      alt=""
      width={28}
      height={28}
      className={cn("h-7 w-7 object-contain", className)}
      aria-hidden
    />
  );
}

export type AwardBadgeItem = {
  key: string;
  logo: ReactNode;
  content: ReactNode;
};

export const awardBadges: AwardBadgeItem[] = [
  {
    key: "bespoke",
    logo: <BrandIcon />,
    content: (
      <>
        Fully
        <br />
        Bespoke
      </>
    ),
  },
  {
    key: "performance",
    logo: <BrandIcon />,
    content: (
      <>
        Performance
        <br />
        Driven
      </>
    ),
  },
  {
    key: "global",
    logo: <BrandIcon />,
    content: (
      <>
        Global
        <br />
        Reach
      </>
    ),
  },
  {
    key: "precision",
    logo: <BrandIcon />,
    content: (
      <>
        Aesthetic
        <br />
        Precision
      </>
    ),
  },
];

export function AwardBadge({
  logo,
  content,
  variant = "light",
}: {
  logo: ReactNode;
  content: ReactNode;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "award-badge inline-flex h-16 max-w-[280px] shrink-0 items-center justify-center rounded-lg px-6 md:h-16 md:px-7",
        isDark
          ? "bg-white/5 text-white backdrop-blur-xl"
          : "border border-[#0a0a0a]/5 bg-[#00ffff]/10 text-[#0a0a0a] backdrop-blur-xl",
      )}
    >
      <div className="flex h-[40%] shrink-0 items-center">{logo}</div>
      <div
        className={cn(
          "award-badge-content pl-4 text-left text-[0.75rem] uppercase leading-tight tracking-[0.075em]",
          isDark ? "text-white/80" : "text-[#0a0a0a]/80",
        )}
      >
        {content}
      </div>
    </div>
  );
}

export function FooterAwardsMarquee() {
  const items = [...awardBadges, ...awardBadges];

  return (
    <div className="footer-awards-mask -mx-[10%] overflow-hidden">
      <div className="footer-awards-track flex w-max items-center gap-2">
        {items.map((badge, index) => (
          <div key={`${badge.key}-${index}`} className="shrink-0">
            <AwardBadge
              logo={badge.logo}
              content={badge.content}
              variant="dark"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
