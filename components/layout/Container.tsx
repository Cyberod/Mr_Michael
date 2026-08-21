import { cn } from "@/lib/utils";

/**
 * The single horizontal rhythm for the whole site: 1200px max, 20px gutters on
 * mobile, 32px from `md` up. Every section uses this rather than repeating the
 * padding classes — which is how the Stitch pages ended up with four different
 * container widths.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "section" | "header" | "footer" | "nav";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag className={cn("max-w-page px-margin-mobile md:px-gutter mx-auto w-full", className)}>
      {children}
    </Tag>
  );
}
