"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "react-hot-toast";
import { cn } from "@/utils/cn";
import { TextArea } from "../ui/textarea";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { addProject, updateProject } from "@/lib/actions/projects.action";
import { usePathname, useRouter } from "next/navigation";
import {
  addWorkExperience,
  updateWorkExperience,
} from "@/lib/actions/experience.action";
import { editTestimonial } from "@/lib/actions/testimonials.actions";

export function Form({
  formType,
  _id,
  title,
  description,
  liveLink,
  imgUrl,
  type,
  name,
}: {
  formType: string;
  _id?: string;
  title?: string;
  liveLink?: string;
  description?: string;
  imgUrl?: string;
  type?: string;
  name?: string;
}) {
  const initialState = {
    title: title || "",
    description: description || "",
    liveLink: liveLink || "",
  };
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);
  const [verified, setVerified] = useState("false");
  const [img, setImg] = useState<string | undefined>(imgUrl || undefined);
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const path = usePathname();
  useEffect(() => {
    console.log(verified);
  }, [verified]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const loadingToastId = toast.loading("Processing...");
    try {
      if (type === "edit") {
        if (formType === "work-experience") {
          await updateWorkExperience(
            //@ts-ignore
            _id,
            formData.title,
            formData.description,
            img,
            path
          );
          toast.success("Experience Updated Successfully", {
            id: loadingToastId,
          });
          router.push(`/dashboard/work-experiences`);
        } else if (formType === "work-experience") {
          await updateProject(
            //@ts-ignore
            _id,
            formData.title,
            formData.description,
            img,
            formData.liveLink
          );
          toast.success("Project Updated Successfully", {
            id: loadingToastId,
          });
          router.push(`/dashboard/projects`);
        } else {
          await editTestimonial(_id, verified);
          toast.success("Testimonial Updated Successfully", {
            id: loadingToastId,
          });
          router.push(`/dashboard/testimonials`);
        }
      } else {
        if (formType === "project") {
          await addProject(
            formData.title,
            formData.description,
            img,
            formData.liveLink,
            path
          );
          toast.success("Project Added Successfully", {
            id: loadingToastId,
          });
          router.push(`/dashboard/projects`);
        } else if (formType === "work-experience") {
          await addWorkExperience(
            formData.title,
            formData.description,
            img,
            path
          );
          toast.success("Experience Added Successfully", {
            id: loadingToastId,
          });
          router.push(`/dashboard/work-experiences`);
        }
      }

      setFormData(initialState);
      setImg(undefined);
    } catch (err: any) {
      toast.error(err.message, {
        id: loadingToastId,
      });
      console.log(err.message);
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black-100">
      <form className={`my-8`} onSubmit={handleSubmit}>
        {formType === "testimonials" && (
          <div className="mt-8">
            <div className="flex justify-center items-center mb-4">
              <LabelInputContainer className="text-center">
                <h2 className="font-bold text-blue-100 text-lg">
                  <span>Name: </span>
                  <span className="font-normal">{name}</span>
                </h2>
              </LabelInputContainer>
            </div>
            <div className="flex justify-center items-center mb-4">
              <LabelInputContainer className="text-center">
                <h2 className="font-bold text-blue-100 text-lg">
                  <span>Company Name: </span>
                  <span className="font-normal">{title}</span>
                </h2>
              </LabelInputContainer>
            </div>
            <div className="flex justify-center items-center">
              <LabelInputContainer className="text-center">
                <h2 className="font-bold text-blue-100 text-lg">
                  <span>Review: </span>
                  <span className="break-words font-normal">{description}</span>
                </h2>
              </LabelInputContainer>
            </div>
            <div className="flex justify-center pt-5 items-center">
              <LabelInputContainer className="text-center">
                <h2 className="font-bold text-blue-100 text-lg">
                  <span>Verified: </span>
                  <select
                    className="px-3 py-2 border rounded-md  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={verified}
                    onChange={(e) => setVerified(e.target.value)}
                  >
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </h2>
              </LabelInputContainer>
            </div>
          </div>
        )}
        {formType !== "testimonials" && (
          <>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Add a Title..."
                  name="title"
                  value={formData.title}
                  type="text"
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                value={formData.description}
                placeholder="Add a Description..."
                rows={5}
                name="description"
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="image">
                {formType === "project"
                  ? "Project Image"
                  : formType === "work-experience"
                  ? "Experience Image"
                  : "Profile Image"}
              </Label>
              <CldUploadWidget
                uploadPreset="awcutdlq"
                onSuccess={(result, { widget }) => {
                  /*@ts-ignore*/
                  if (result?.info?.secure_url) {
                    /*@ts-ignore*/
                    setImg(result.info.secure_url);
                  }
                }}
              >
                {({ open }) => {
                  return (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        open();
                      }}
                      className="bg-black-300 py-2 rounded-lg text-blue-100"
                    >
                      {imgUrl ? "Upload a New Image" : "Upload an Image"}
                    </button>
                  );
                }}
              </CldUploadWidget>
              {(imgUrl != undefined || img !== undefined) && (
                <div className="flex justify-center items-center">
                  {/* @ts-ignore */}
                  <Image
                    src={img || imgUrl}
                    alt="image"
                    width={200}
                    height={200}
                  />
                </div>
              )}
            </LabelInputContainer>
            {formType === "project" && (
              <div className="pt-5">
                <LabelInputContainer>
                  <Label htmlFor="liveLink">Live Project Link</Label>
                  <Input
                    id="liveLink"
                    placeholder="Add a Deployed Project Link..."
                    name="liveLink"
                    value={formData.liveLink}
                    type="text"
                    onChange={handleChange}
                  />
                </LabelInputContainer>
              </div>
            )}
          </>
        )}
        <div className="pt-5">
          <button
            className="bg-gradient-to-br relative group/btn  block bg-black-300 w-full text-white rounded-md h-10 font-medium"
            type="submit"
          >
            {formType === "project"
              ? type === "edit"
                ? "Edit Project"
                : "Add Project"
              : formType === "work-experience"
              ? type === "edit"
                ? "Edit Experience"
                : "Add Experience"
              : "Edit Testimonial"}
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
