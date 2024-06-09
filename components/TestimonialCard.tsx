import { HoverEffect } from "./ui/Card";

interface ProjectArray {
  id: number;
  quote: string;
  name: string;
  title: string;
  type?: string;
}

export function TestimonialCardHoverEffectDemo({
  projects,
}: {
  projects: ProjectArray[];
}) {
  return (
    <div className="flex items-center justify-center max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
