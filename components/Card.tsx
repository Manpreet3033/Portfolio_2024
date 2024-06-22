import { HoverEffect } from "./ui/Card";

interface CardArray {
  _id: string;
  title: string;
  quote?: string;
  description?: string;
  liveLink?: string;
  imgUrl?: string;
  name?: string;
  type?: string;
  email?: string;
  message?: string;
}

export function CardHoverEffectDemo({ items }: { items: CardArray[] }) {
  return (
    <div className="flex items-center justify-center mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  );
}
