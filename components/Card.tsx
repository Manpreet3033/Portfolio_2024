import { HoverEffect } from "./ui/Card";

interface ProjectArray {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

export function CardHoverEffectDemo({
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
