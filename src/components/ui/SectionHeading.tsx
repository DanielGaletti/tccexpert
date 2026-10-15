import type { ReactNode } from "react";

type Props = {
  kicker: string;
  id: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

/** Rótulo curto + título (H2) de cada seção. */
export function SectionHeading({ kicker, id, children, className = "", align = "left" }: Props) {
  return (
    <div data-reveal className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <p className="kicker">{kicker}</p>
      <h2 id={id} className="mt-4 text-h2">
        {children}
      </h2>
    </div>
  );
}
