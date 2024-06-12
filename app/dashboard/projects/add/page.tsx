import React from "react";
import { Form } from "@/components/form/Form";

const page = () => {
  return (
    <>
      <h2 className="text-center pt-12 font-bold md:text-5xl text-4xl text-blue-100">
        Add Project Page
      </h2>
      <section className="pt-10 pb-10 h-full flex items-center justify-center overflow-hidden flex-wrap gap-5">
        <Form />
      </section>
    </>
  );
};

export default page;
