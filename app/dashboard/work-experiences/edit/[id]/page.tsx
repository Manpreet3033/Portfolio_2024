import { Form } from "@/components/form/Form";
import { getWorkExperienceById } from "@/lib/actions/experience.action";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const formEditData = await getWorkExperienceById(params.id);
  const data = formEditData.experience;
  return (
    <>
      <h2 className="text-center pt-12 font-bold md:text-5xl text-4xl text-blue-100">
        Edit Work Experience
      </h2>
      <section className="pt-10 pb-10 h-full flex items-center justify-center flex-wrap overflow-hidden gap-5">
        <Form
          formType="work-experience"
          _id={data._id}
          type="edit"
          title={data.title}
          description={data.description}
          imgUrl={data.imgUrl}
        />
      </section>
    </>
  );
};

export default page;
