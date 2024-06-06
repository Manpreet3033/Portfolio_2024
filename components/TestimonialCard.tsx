import { TestimonialHoverEffect } from "./ui/TestimonialsCard";

interface ProjectArray {
  id: number;
  quote: string;
  name: string;
  title: string;
}

export function TestimonialCardHoverEffectDemo({
  projects,
}: {
  projects: ProjectArray[];
}) {
  return (
    <div className="flex items-center justify-center max-w-5xl mx-auto px-8">
      <TestimonialHoverEffect items={projects} />
    </div>
  );
}
