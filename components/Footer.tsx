import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { ContainerScroll } from "./ui/ContainerScroll";
import { ContactForm } from "./ContactForm";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-5" id="contact">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h1 className="text-blue-100 heading lg:max-w-[45vw]">
              Ready to take <span className="text-purple">your</span> digital
              presence to the next level?
            </h1>
          </div>
        }
      >
        <ContactForm />
      </ContainerScroll>
      <div className="flex md:flex-row flex-col justify-between gap-7 items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-blue-100">
          Copyright © 2024 Manpreet
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link
              href={profile.link}
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 saturate-180 rounded-lg border border-black-300"
            >
              <Image
                src={profile.img}
                alt={profile.img}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
