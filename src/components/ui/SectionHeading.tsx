import type { ReactNode } from "react";

type Props = {
  index: string;
  kicker: string;
  id: string;
  children: ReactNode;
  className?: string;
};

/** Cabeçalho de seção: numeração editorial + título serifado (H2). */
export function SectionHeading({ index, kicker, id, children, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="kicker">
        <span aria-hidden="true" className="font-serif text-base tracking-normal normal-case">
          §&nbsp;{index}
        </span>
        <span>{kicker}</span>
      </p>
      <h2 id={id} className="mt-5 text-h2">
        {children}
      </h2>
    </div>
  );
}
