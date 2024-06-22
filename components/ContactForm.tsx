"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { TextArea } from "./ui/textarea";
import { contactEmailSend } from "@/utils/helpers/nodemailer";
import toast from "react-hot-toast";
import { addContactDetails } from "@/lib/actions/contact.actions";

interface FormDataProps {
  fullname: string;
  email: string;
  message: string;
}

const initialState = {
  fullname: "",
  email: "",
  message: "",
};

export function SignupFormDemo() {
  const [formData, setFormData] = useState<FormDataProps>(initialState);
  const [errors, setErrors] = useState<Partial<FormDataProps>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors: Partial<FormDataProps> = {};
    if (!formData.fullname.trim()) {
      formErrors.fullname = "Full name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email address is required";
    } else if (!isValidEmail(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        const loadingId = toast.loading("Sending your response...");
        await contactEmailSend(
          formData.fullname,
          formData.email,
          formData.message
        );
        await addContactDetails(
          formData.fullname,
          formData.email,
          formData.message
        );
        toast.success("Message sent successfully", {
          id: loadingId,
        });
        setFormData(initialState);
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black-200">
      <h2 className="font-bold text-xl text-blue-100">Contact Me!!!</h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-400">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fullname" className="text-blue-100">
              Full name
            </Label>
            <Input
              id="fullname"
              name="fullname"
              placeholder="Manpreet Singh"
              type="text"
              onChange={handleChange}
              value={formData.fullname}
            />
            {errors.fullname && (
              <span className="text-red-500 text-xs">{errors.fullname}</span>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-blue-100">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="manpreetkamboj60.net@gmail.com"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="text-blue-100">
            Message
          </Label>
          <TextArea
            id="message"
            name="message"
            rows={3}
            placeholder="Enter your message..."
            onChange={handleChange}
            value={formData.message}
          />
          {errors.message && (
            <span className="text-red-500 text-xs">{errors.message}</span>
          )}
        </LabelInputContainer>

        <div className="flex justify-center">
          <button
            className="inline-flex h-12 w-screen mb-3 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

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
