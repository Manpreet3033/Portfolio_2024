import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { title } from "process";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { AnimatedTooltip } from "@/components/ui/AnimatedToolTip";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-blue-100">
        A small section of <span className="text-purple">recent projects</span>{" "}
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 text-white">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={"Visit"} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute b-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:font-normal line-clamp-2 text-sm font-light lg:text-lg">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb3">
                <div className="flex items-center">
                  {/* {iconLists.map((icon, index) => (
                    <div
                      key={id}
                      className="border rounded-full border-white/[0.2]"
                      style={{ transform: `translateX(-${4 * index * 2}px)` }}
                    >
                      <img
                        src={icon}
                        alt={icon}
                        className="p-2 rounded-full bg-blue-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      />
                    </div>
                  ))} */}
                  <AnimatedTooltip items={iconLists} />
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={link}
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;