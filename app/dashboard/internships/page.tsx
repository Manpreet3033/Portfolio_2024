import { CardHoverEffectDemo } from "@/components/Card";
import { getAllWorkExperience } from "@/lib/actions/experience.action";
import { getAllInternships } from "@/lib/actions/internship.actions";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await getAllInternships();
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        My Internships
      </h1>
      <section className="pb-10 flex items-center justify-center flex-wrap gap-5">
        <CardHoverEffectDemo items={data.allInternships} />
      </section>
      <Link
        className="flex justify-center items-center pb-20"
        href={"/dashboard/internships/add"}
      >
        <button className="md:inline-block items-center lg:inline-block xs-devices:px-2 px-6 py-2 bg-transparent border text-blue-100 border-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          <span>Add New Internship</span>
        </button>
      </Link>
    </>
  );
};

export default page;
