import { CardHoverEffectDemo } from "@/components/Card";
import React from "react";

interface ProjectArray {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

const result: Array<ProjectArray> = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    imgUrl: "/p1.svg",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    imgUrl: "/p2.svg",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    imgUrl: "/p3.svg",
  },
  {
    id: 4,
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    imgUrl: "/p3.svg",
  },
];

const page = () => {
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        All Projects
      </h1>
      <section className="pb-10 flex items-center justify-center flex-wrap gap-5">
        <CardHoverEffectDemo projects={result} />
      </section>
    </>
  );
};

export default page;
