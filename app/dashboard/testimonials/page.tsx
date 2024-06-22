import { CardHoverEffectDemo } from "@/components/Card";
import { getAllTestimonials } from "@/lib/actions/testimonials.actions";
import React from "react";

interface TestimonialArray {
  _id: string;
  title: string;
  quote: string;
  name: string;
  type?: string;
}

const page = async () => {
  const data = await getAllTestimonials();
  const testimonials = data.allTestimonials;
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        Testimonials
      </h1>
      <section className="pb-10 flex items-center justify-center flex-wrap gap-5">
        <CardHoverEffectDemo items={testimonials} />
      </section>
    </>
  );
};

export default page;
