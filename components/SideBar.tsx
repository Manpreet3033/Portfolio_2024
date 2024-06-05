"use client";
import { sidebarLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/MovingBorder";
import { SignedOut } from "@clerk/nextjs";
import MagicButton from "./ui/MagicButton";
import { FaUser } from "react-icons/fa";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col sticky left-0 top-0 bg-black-100 h-screen justify-between overflow-y-auto max-sm:hidden pt-[8rem] lg:w-[266px]">
      <div className="flex flex-1 flex-col lg:px-6 gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.route}
              className={`${
                isActive ? "bg-black-300 rounded-2xl text-purple" : "text-white"
              } flex items-center justify-start gap-2 p-3 `}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                height={35}
                width={35}
                className={`${isActive ? "" : ""}`}
              />
              <p
                className={`${
                  isActive
                    ? "text-[18px] font-bold leading-[140%]"
                    : "text-[18px] font-medium leading-[25.2px]"
                } max-lg:hidden `}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex h-full mb-10 justify-end flex-col gap-4 max-sm:hidden ">
          <Link href="/sign-in">
            <MagicButton
              title="Login"
              icon={<FaUser />}
              position="left"
              otherClasses="min-h-[41px] w-full rounded-lg lg:px-14 py-4 shadow-none"
            />
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default SideBar;
