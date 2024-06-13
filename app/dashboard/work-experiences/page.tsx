import { CardHoverEffectDemo } from "@/components/Card";
import { getAllWorkExperience } from "@/lib/actions/experience.action";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

// const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Engineer Intern",
//     description:
//       "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//     type: "work-experience",
//     imgUrl: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Mobile App Dev - JSM Tech",
//     description:
//       "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//     type: "work-experience",
//     imgUrl: "/exp2.svg",
//   },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     description:
//       "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//     type: "work-experience",
//     imgUrl: "/exp3.svg",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     description:
//       "Developed and maintained user-facing features using modern frontend technologies.",
//     type: "work-experience",
//     imgUrl: "/exp4.svg",
//   },
// ];

const page = async () => {
  const data = await getAllWorkExperience();
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        Work Experiences
      </h1>
      <section className="pb-10 flex items-center justify-center flex-wrap gap-5">
        <CardHoverEffectDemo items={data.allExperiences} />
      </section>
      <Link
        className="flex justify-center items-center pb-20"
        href={"/dashboard/work-experiences/add"}
      >
        <button className="md:inline-block items-center lg:inline-block xs-devices:px-2 px-6 py-2 bg-transparent border text-blue-100 border-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          <span>Add New Experience</span>
        </button>
      </Link>
    </>
  );
};

export default page;
