"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies } from "@/data";
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
import Spinner from "./common/Spinner";
import { sendEmail } from "@/utils/helpers/nodemailer";
import { addTestimonial } from "@/lib/actions/testimonials.actions";
import { usePathname } from "next/navigation";

interface TestimonialType {
  _id: string;
  title: string;
  quote: string;
  name: string;
  imgUrl: string;
  verified: boolean;
  type: string;
}

const Testimonials = ({
  testimonials,
}: {
  testimonials: Array<TestimonialType>;
}) => {
  const initialState = {
    name: "",
    review: "",
    company: "",
    email: "",
  };

  const errorInitialState = {
    name: "",
    review: "",
    company: "",
    email: "",
  };

  const path = usePathname();
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState(errorInitialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, company, review } = formData;

    // Simple form validation
    if (name.trim().length < 5) {
      setError((prevErrors) => ({
        ...prevErrors,
        name: "Name must be at least 5 characters",
      }));
      return;
    }
    if (!email.trim()) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }
    if (!company.trim()) {
      setError((prevErrors) => ({
        ...prevErrors,
        company: "Company name is required",
      }));
      return;
    }
    if (!review.trim()) {
      setError((prevErrors) => ({
        ...prevErrors,
        review: "Review is required",
      }));
      return;
    }

    setIsLoading(true);
    try {
      // Assuming `addTestimonial` and `sendEmail` functions are correctly implemented
      await addTestimonial(name, company, review, path);
      await sendEmail(name, company, review, email);
      setIsDialogOpen(false); // Close dialog after successful submission
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-blue-100">
        Kind words from <span className="text-purple">satisfied clients</span>{" "}
      </h1>
      <div className="flex flex-col items-center mt-14">
        {testimonials.length > 0 ? (
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        ) : (
          <h2 className="py-8 font-bold text-3xl text-blue-100">
            No Testimonials yet...
          </h2>
        )}
        <div className="py-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="py-7 px-5">
                Submit a Testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-sm:h-fit">
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
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <LabelInputContainer>
                    <Label htmlFor="name">
                      Name{" "}
                      <span className="text-red-500 align-super text-xs">
                        *
                      </span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      type="text"
                      onChange={handleChange}
                    />
                    {error.name && (
                      <span className="text-red-500 text-sm">{error.name}</span>
                    )}
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="email">
                      Email
                      <span className="text-red-500 align-super text-xs">
                        *
                      </span>
                    </Label>
                    <Input
                      id="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      type="email"
                      onChange={handleChange}
                    />
                    {error.email && (
                      <span className="text-red-500 text-sm">
                        {error.email}
                      </span>
                    )}
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="company">
                      Company Name{" "}
                      <span className="text-red-500 align-super text-xs">
                        *
                      </span>
                    </Label>
                    <Input
                      id="company"
                      placeholder="Add your company name..."
                      name="company"
                      value={formData.company}
                      type="text"
                      onChange={handleChange}
                    />
                    {error.company && (
                      <span className="text-red-500 text-sm">
                        {error.company}
                      </span>
                    )}
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="review">
                      Review{" "}
                      <span className="text-red-500 align-super text-xs">
                        *
                      </span>
                    </Label>
                    <TextArea
                      id="review"
                      placeholder="Add your review working with Manpreet..."
                      name="review"
                      value={formData.review}
                      rows={4}
                      cols={4}
                      onChange={handleChange}
                    />
                    {error.review && (
                      <span className="text-red-500 text-sm">
                        {error.review}
                      </span>
                    )}
                  </LabelInputContainer>
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex justify-center items-center gap-2">
                        <Spinner /> <span>Submitting</span>{" "}
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </DialogFooter>
              </form>
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
