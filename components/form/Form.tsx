"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "react-hot-toast";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { TextArea } from "../ui/textarea";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { addProject } from "@/lib/actions/projects.action";
import { usePathname } from "next/navigation";
import image from "next/image";

const initialState = {
  title: "",
  description: "",
};

export function Form() {
  const [formData, setFormData] = useState(initialState);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const path = usePathname();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const loadingToastId = toast.loading("Processing...");
    try {
      await addProject(formData.title, formData.description, imgUrl, path);
      toast.success("Project Added Successfully", {
        id: loadingToastId,
      });
      setFormData(initialState);
      setImgUrl(undefined);
    } catch (err: any) {
      toast.error(err.message, {
        id: loadingToastId,
      });
      console.log(err.message);
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black-100">
      <form className="my-8" onSubmit={handleSubmit}>
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
          <Label htmlFor="image">Project Image</Label>
          <span className="sr-only">Choose profile photo</span>
          <CldUploadWidget
            uploadPreset="awcutdlq"
            onSuccess={(result, { widget }) => {
              /*@ts-ignore*/
              if (result?.info?.secure_url) {
                /*@ts-ignore*/
                setImgUrl(result.info.secure_url);
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
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
          {imgUrl !== undefined && (
            <div className="flex justify-center items-center">
              <Image src={imgUrl} alt="image" width={200} height={200} />
            </div>
          )}
        </LabelInputContainer>
        <div className="pt-5">
          <button
            className="bg-gradient-to-br relative group/btn  block bg-black-300 w-full text-white rounded-md h-10 font-medium"
            type="submit"
          >
            Add Project
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
