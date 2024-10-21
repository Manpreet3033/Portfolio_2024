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
