import { Briefcase, Clock, Compass, GraduationCap, Layers, Lightbulb, Ruler, SpellCheck } from "lucide-react";
import type { Service } from "@/content/site-content";

const serviceIcons = {
  mentoria: GraduationCap,
  revisao: SpellCheck,
  formatacao: Ruler,
  projetos: Lightbulb,
} satisfies Record<Service["icon"], unknown>;

const audienceIcons = { layers: Layers, clock: Clock, briefcase: Briefcase, compass: Compass };

export function ServiceIcon({ name, className = "size-5" }: { name: Service["icon"]; className?: string }) {
  const Icon = serviceIcons[name];
  return <Icon className={className} aria-hidden="true" />;
}

export function AudienceIcon({ name, className = "size-5" }: { name: string; className?: string }) {
  const Icon = audienceIcons[name as keyof typeof audienceIcons] ?? Compass;
  return <Icon className={className} aria-hidden="true" />;
}
