import { Form } from "@/components/form/Form";
import { getTestimonialById } from "@/lib/actions/testimonials.actions";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getTestimonialById(params.id);
  const testimonial = data.testimonial;
  return (
    <>
      <h1 className="heading text-blue-100 pt-10">Testimonials Edit Page</h1>
      <section className="pt-10 pb-10 h-full flex items-center justify-center flex-wrap overflow-hidden gap-5">
        <Form
          formType="testimonials"
          _id={testimonial._id}
          type="edit"
          title={testimonial.title}
          description={testimonial.quote}
          name={testimonial.name}
        />
      </section>
    </>
  );
};

export default page;
