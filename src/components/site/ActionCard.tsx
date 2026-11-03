import type { ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";

/** A prominent link with the same hover and keyboard treatment across the site. */
export function ActionCard({ children, className = "", ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a {...props} className={`action-card ${className}`}>
      <span>{children}</span>
      <span className="action-card-arrow" aria-hidden>
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  );
}
