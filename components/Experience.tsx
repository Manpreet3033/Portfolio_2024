import React from "react";
import { Button } from "./ui/MovingBorder";
import { getAllWorkExperience } from "@/lib/actions/experience.action";
import Image from "next/image";

const Experience = async () => {
  const data = await getAllWorkExperience();
  const workExperience = data.allExperiences;
  return (
    <div className="pt-10 pb-20" id="testimonials">
      <h1 className="heading text-blue-100">
        My <span className="text-purple"> work experience</span>{" "}
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card._id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-slate-700"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.imgUrl}
                alt={card.title}
                loading="lazy"
                width={32}
                height={32}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
