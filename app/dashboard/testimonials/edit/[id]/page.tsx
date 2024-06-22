import TestimonialEditForm from "@/components/form/TestimonialEditForm";
import { getTestimonialById } from "@/lib/actions/testimonials.actions";
import React from "react";

interface TestimonialInterface {
  _id: string;
  title: string;
  quote: string;
  name: string;
  verified: boolean;
  imgUrl: string;
  type?: string;
}

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getTestimonialById(params.id);
  const testimonial: TestimonialInterface = data.testimonial;
  return (
    <>
      <h1 className="heading text-blue-100 pt-10">Testimonials Edit Page</h1>
      <section className="pt-10 pb-10 h-full flex items-center justify-center flex-wrap overflow-hidden gap-5">
        <TestimonialEditForm
          _id={testimonial._id}
          name={testimonial.name}
          title={testimonial.title}
          quote={testimonial.quote}
          verified={testimonial.verified}
          imgUrl={testimonial.imgUrl}
        />
      </section>
    </>
  );
};

export default page;
