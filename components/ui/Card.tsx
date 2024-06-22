"use client";
import { deleteExperience } from "@/lib/actions/experience.action";
import { deleteProject } from "@/lib/actions/projects.action";
import { deleteTestimonial } from "@/lib/actions/testimonials.actions";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    _id: string;
    title: string;
    description?: string;
    liveLink?: string;
    imgUrl?: string;
    quote?: string;
    name?: string;
    type?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const path = usePathname();
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Processing...");
    try {
      const item = items.find((item) => item._id === id);
      if (item && item.type === "projects") {
        await deleteProject({ id: id, path: path });
        toast.success("Project Delete Successfully", {
          id: toastId,
        });
      } else if (item && item.type === "work-experience") {
        await deleteExperience({ id: id, path: path });
        toast.success("Experience Delete Successfully", {
          id: toastId,
        });
      } else if (item && item.type === "testimonials") {
        await deleteTestimonial(id, path);
        toast.success("Testimonial Deleted Successfully", {
          id: toastId,
        });
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message, {
        id: toastId,
      });
    }
  };

  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-devices:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item._id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {(item.type === "projects" || item.type === "work-experience") && (
              <div className="relative flex items-center justify-center overflow-hidden h-52 mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="z-10 absolute b-0 object-cover"
                />
              </div>
            )}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description || item.quote}</CardDescription>
            {item.type === "projects" && (
              <div className="flex pt-5">
                <a href={item.liveLink} className="font-bold text-blue-100">
                  Visit Project
                </a>
              </div>
            )}
            <div
              className={`flex w-full ${
                item.type === "projects" || item.type === "work-experience"
                  ? "justify-end"
                  : "justify-between"
              } mt-4 items-center gap-4`}
            >
              {item.type === "testimonials" && (
                <div className="flex items-center">
                  <div className="me-3 xs-devices:hidden block">
                    <img
                      src={item.imgUrl}
                      alt="profile"
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                  </div>
                  <CardName>{item.name}</CardName>
                </div>
              )}
              <div className="flex gap-3 items-center justify-center">
                <Link
                  href={
                    item.type === "projects"
                      ? `/dashboard/projects/edit/${item._id}`
                      : item.type === "testimonials"
                      ? `/dashboard/testimonials/edit/${item._id}`
                      : `/dashboard/work-experiences/edit/${item._id}`
                  }
                >
                  <div>
                    <FiEdit className="text-white hover:text-blue-300 hover:scale-150 transition-all text-lg md:text-xl cursor-pointer" />
                  </div>
                </Link>
                <MdDeleteOutline
                  className="text-[#D11A2A] hover:scale-150 transition-all hover:text-[#D11b2a] text-2xl md:text-2xl cursor-pointer"
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black-100 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export const CardName = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h5
      className={cn(
        "text-blue-100 text-sm font-semibold tracking-wide",
        className
      )}
    >
      {children}
    </h5>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-blue-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
