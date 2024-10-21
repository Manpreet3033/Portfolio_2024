import { Form } from "@/components/form/Form";
import React from "react";

const page = () => {
  return (
    <>
      <h2 className="text-center pt-12 font-bold md:text-5xl text-4xl text-blue-100">
        Add a new Internship
      </h2>
      <section className="pt-10 pb-10 h-full flex items-center justify-center flex-wrap overflow-hidden gap-5">
        <Form formType="internship" />
      </section>
    </>
  );
};

export default page;
