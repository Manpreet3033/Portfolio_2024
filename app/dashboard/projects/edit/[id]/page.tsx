import { Form } from "@/components/form/Form";
import { getProjectById } from "@/lib/actions/projects.action";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const formEditData = await getProjectById(params.id);
  const data = formEditData.project;
  return (
    <>
      <h2 className="text-center pt-12 font-bold md:text-5xl text-4xl text-blue-100">
        Edit Work Experience
      </h2>
      <section className="pt-10 pb-10 h-full flex items-center justify-center flex-wrap overflow-hidden gap-5">
        <Form
          formType="project"
          _id={data._id}
          type="edit"
          title={data.title}
          description={data.description}
          imgUrl={data.imgUrl}
          liveLink={data.liveLink}
        />
      </section>
    </>
  );
};

export default page;
