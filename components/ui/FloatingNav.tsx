"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShimmerButton from "./ShimmerButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/sign-in");
  };

  const navigateToDashboard = () => {
    router.push("/dashboard/projects");
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border rounded-lg bg-[#10132e] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 border-white/[0.2] items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-400  hover:text-blue-200"
            )}
          >
            <span className="block ">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <SignedOut>
          <ShimmerButton
            title="Login"
            position="left"
            icon={<FaUser />}
            handleClick={navigateToLogin}
          />
        </SignedOut>
        <SignedIn>
          <ShimmerButton
            title="Dashboard"
            icon={<MdDashboard />}
            position="left"
            handleClick={navigateToDashboard}
          />
          <div className="block max-sm:hidden">
            <UserButton />
          </div>
        </SignedIn>
      </motion.div>
    </AnimatePresence>
  );
};
