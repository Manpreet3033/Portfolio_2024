"use client";
import React, { ChangeEvent, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "./ui/textarea";

const Testimonials = () => {
  const initialState = {
    name: "",
    review: "",
    company: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-blue-100">
        Kind words from <span className="text-purple">satisfied clients</span>{" "}
      </h1>
      <div className="flex flex-col items-center mt-14">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="py-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="py-7 px-5">
                Submit a Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center mt-3 text-2xl font-bold">
                  Submit a Testimonial
                </DialogTitle>
                <DialogDescription>
                  Your testimonial will be added to our website after
                  verification ✅. We ensure authenticity and maintain a
                  professional platform. Thank you for sharing your feedback on
                  working with Manpreet!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <LabelInputContainer>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    type="text"
                    onChange={handleChange}
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Add your company name..."
                    name="company"
                    value={formData.company}
                    type="text"
                    onChange={handleChange}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="review">Review</Label>
                  <TextArea
                    id="review"
                    placeholder="Add your review working with Manpreet..."
                    name="review"
                    value={formData.review}
                    rows={4}
                    cols={4}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-5">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5 " />
              <img src={nameImg} alt={name} className="md:w-24 w-20 " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

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
