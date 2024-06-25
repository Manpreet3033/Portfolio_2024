"use client";
import { editTestimonial } from "@/lib/actions/testimonials.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const TestimonialEditForm = ({
  _id,
  name,
  imgUrl,
  title,
  verified,
  quote,
}: {
  _id: string;
  name: string;
  imgUrl: string;
  title: string;
  verified: boolean;
  quote: string;
}) => {
  const [verify, setVerify] = useState(JSON.stringify(verified));
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loadingToastId = toast.loading("Processing...");
    try {
      await editTestimonial(_id, verify);
      toast.success("Testimonial Updated Successfully", {
        id: loadingToastId,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
    router.push(`/dashboard/testimonials`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-black-100 shadow-md rounded-lg space-y-6"
    >
      <div className="text-center mb-4">
        <Image
          src={imgUrl}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto"
          loading="lazy"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-blue-100">{name}</h2>
        <p className="text-blue-200">{title}</p>
      </div>
      <div>
        <LabelInputContainer>
          <h2 className="text-lg font-bold text-blue-100">
            Review:
            <span className="block text-blue-200 font-normal mt-2">
              {quote}
            </span>
          </h2>
        </LabelInputContainer>
      </div>
      <div>
        <LabelInputContainer>
          <h2 className="text-lg font-medium text-blue-100">Verified:</h2>
          <select
            className="mt-2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={verify}
            onChange={(e) => setVerify(e.target.value)}
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </LabelInputContainer>
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 w-full text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default TestimonialEditForm;

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-2">{children}</div>;
};
