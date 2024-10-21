import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";
import { getAllProjects } from "@/lib/actions/projects.action";
import Image from "next/image";

const RecentProjects = async () => {
  const data = await getAllProjects();
  const projects = data.allProjects;
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-blue-100">
        A small section of my{" "}
        <span className="text-purple">recent projects</span>{" "}
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 text-white">
        {projects.map(({ _id, title, description, imgUrl, liveLink }) => (
          <div
            key={_id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={"Visit"} href={liveLink}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image
                    src="/bg.png"
                    alt="bg-img"
                    width={100}
                    height={100}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <Image
                  src={imgUrl}
                  alt={title}
                  className="z-10 absolute b-0 object-fit w-full h-full"
                  width={600}
                  height={600}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:font-normal line-clamp-3 text-sm font-light lg:text-lg">
                {description}
              </p>
              <div className="flex items-center justify-between mt-7 mb3">
                <div className="flex items-center"></div>
                <div className="flex justify-center items-center">
                  <a
                    href={liveLink}
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
