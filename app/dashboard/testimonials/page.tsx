import { TestimonialCardHoverEffectDemo } from "@/components/TestimonialCard";
import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 2,
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 3,
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 4,
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 5,
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

const page = () => {
  return (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center pt-12 text-blue-100">
        Testimonials
      </h1>
      <section className="pb-10 flex items-center justify-center flex-wrap gap-5">
        <TestimonialCardHoverEffectDemo projects={testimonials} />
      </section>
    </>
  );
};

export default page;
