import { CardHoverEffectDemo } from "@/components/Card";
import React from "react";

const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    description:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    type: "work-experience",
    imgUrl: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    description:
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    type: "work-experience",
    imgUrl: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    description:
      "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    type: "work-experience",
    imgUrl: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    description:
      "Developed and maintained user-facing features using modern frontend technologies.",
    type: "work-experience",
    imgUrl: "/exp4.svg",
  },
];

const page = () => {
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        Work Experiences
      </h1>
      <section className="pb-10 flex items-center justify-center flex-wrap gap-5">
        <CardHoverEffectDemo items={workExperience} />
      </section>
    </>
  );
};

export default page;
