import { CardHoverEffectDemo } from "@/components/Card";
import React from "react";

interface TestimonialArray {
  _id: string;
  title: string;
  quote: string;
  name: string;
  type?: string;
}

const testimonials: Array<TestimonialArray> = [
  {
    _id: "1",
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    type: "testimonials",
  },
  {
    _id: "2",
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    type: "testimonials",
  },
  {
    _id: "3",
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    type: "testimonials",
  },
  {
    _id: "4",
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    type: "testimonials",
  },
  {
    _id: "5",
    quote:
      "Collaborating with Manpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Manpreet's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Manpreet is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    type: "testimonials",
  },
];

const page = () => {
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
