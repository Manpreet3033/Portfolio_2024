"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/data/index";
import { usePathname } from "next/navigation";
import { Button } from "./ui/MovingBorder";
import MagicButton from "./ui/MagicButton";
import { FaUser } from "react-icons/fa";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <SheetClose asChild key={link.route}>
            <Link
              href={link.route}
              className={`${
                isActive ? "bg-black-300 rounded-2xl text-purple" : "text-white"
              } flex items-center gap-2 p-4 `}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {link.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          alt="hamburger-menu"
          width={36}
          height={36}
          className="invert-0 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black-100 border-none">
        <Link href="/" className="flex items-center gap-2">
          <p className="font-bold text-xl text-blue-100">
            Admin <span className="text-purple">Panel</span>
          </p>
        </Link>
        <div className="flex flex-col justify-between h-full">
          <SheetClose asChild className="text-white">
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-4 pb-12">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <MagicButton
                    title="Login"
                    icon={<FaUser />}
                    position="right"
                    otherClasses="min-h-[41px] w-full rounded-2xl px-14 md:px-20 py-4 shadow-none"
                  />
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
