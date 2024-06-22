"use server";
import { revalidatePath } from "next/cache";
import testimonialsModel from "../database/models/testimonials.model";
import { connectToDatabase } from "../database/mongoose";

export async function addTestimonial(
  name: string,
  company: string,
  review: string,
  path: string
) {
  try {
    await connectToDatabase();
    const newTestimonial = new testimonialsModel({
      title: company,
      name: name,
      quote: review,
      imgUrl: `https://api.dicebear.com/9.x/initials/svg?seed=${name}`,
    });
    await newTestimonial.save();
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getAllVerifiedTestimonials() {
  try {
    await connectToDatabase();
    const testimonials = await testimonialsModel.find({ verified: true });
    const allTestimonials = testimonials.map((testimonial) => ({
      ...testimonial.toObject(),
      _id: testimonial._id.toString(),
    }));
    return { allTestimonials: allTestimonials };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getAllTestimonials() {
  try {
    await connectToDatabase();
    const testimonials = await testimonialsModel.find({});
    const allTestimonials = testimonials.map((testimonial) => ({
      ...testimonial.toObject(),
      _id: testimonial._id.toString(),
    }));
    return { allTestimonials: allTestimonials };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getTestimonialById(id: string) {
  try {
    await connectToDatabase();
    const testimonialDoc = await testimonialsModel.findById(id);
    const testimonial = testimonialDoc.toObject();
    if (testimonial) {
      testimonial._id = testimonial._id.toString();
    }
    return { testimonial: testimonial };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function editTestimonial(id: string | undefined, value: string) {
  try {
    await connectToDatabase();
    const updatedTestimonial = await testimonialsModel.findByIdAndUpdate(
      id,
      {
        verified: value === "true" ? true : false,
      },
      { new: true }
    );
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function deleteTestimonial(id: string | undefined, path: string) {
  try {
    await connectToDatabase();
    await testimonialsModel.findByIdAndDelete(id);
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}
