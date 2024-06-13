import { CardHoverEffectDemo } from "@/components/Card";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { getAllProjects } from "@/lib/actions/projects.action";
import Link from "next/link";
import React from "react";

interface ProjectArray {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  type?: string;
}

// const result: Array<ProjectArray> = [
//   {
//     id: 1,
//     title: "3D Solar System Planets to Explore",
//     description:
//       "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//     imgUrl: "/p1.svg",
//     type: "projects",
//   },
//   {
//     id: 2,
//     title: "Yoom - Video Conferencing App",
//     description:
//       "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//     imgUrl: "/p2.svg",
//     type: "projects",
//   },
//   {
//     id: 3,
//     title: "AI Image SaaS - Canva Application",
//     description:
//       "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     imgUrl: "/p3.svg",
//     type: "projects",
//   },
//   {
//     id: 4,
//     title: "AI Image SaaS - Canva Application",
//     description:
//       "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//     imgUrl: "/p3.svg",
//     type: "projects",
//   },
// ];

const page = async () => {
  const data = await getAllProjects();
  const projects = data.allProjects;
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        All Projects
      </h1>
      {projects.length > 0 && (
        <section className="pb-10 flex items-center justify-center flex-wrap gap-5">
          <CardHoverEffectDemo items={projects} />
        </section>
      )}
      <Link
        className="flex justify-center pt-10 items-center pb-20"
        href={"/dashboard/projects/add"}
      >
        <button className="md:inline-block items-center lg:inline-block xs-devices:px-2 px-6 py-2 bg-transparent border text-blue-100 border-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          <span>Add New Project</span>
        </button>
      </Link>
    </>
  );
};

export default page;
