"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import experiencesModel from "../database/models/experiences.model";

export async function addWorkExperience(
  title: string,
  description: string,
  imgUrl: string | undefined,
  path: string
) {
  try {
    await connectToDatabase();
    const newExperience = new experiencesModel({
      title: title,
      description: description,
      imgUrl: imgUrl,
    });
    await newExperience.save();
    revalidatePath(path);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

export async function getAllWorkExperience() {
  try {
    connectToDatabase();
    const experiences = await experiencesModel.find({}, {}, { new: true });
    const allExperiences = experiences.map((exp) => ({
      ...exp.toObject(),
      _id: exp._id.toString(),
    }));
    return { allExperiences };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getWorkExperienceById(id: string) {
  try {
    await connectToDatabase();
    const experienceDoc = await experiencesModel.findById(
      id,
      {},
      { new: true }
    );
    const experience = experienceDoc.toObject();
    if (experience) {
      experience._id = experience._id.toString();
    }
    return { experience };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function updateWorkExperience(
  _id: string,
  title: string,
  description: string,
  imgUrl: string | undefined,
  path: string
) {
  try {
    await connectToDatabase();
    const updatedExperience = await experiencesModel.findByIdAndUpdate(
      _id,
      {
        title: title,
        description: description,
        imgUrl: imgUrl,
      },
      { new: true }
    );
    revalidatePath(`/dashboard/work-experiences`);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function deleteExperience({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  try {
    await connectToDatabase();
    const experience = await experiencesModel.findById(id);
    if (!experience) {
      console.log("Experience not found....");
      return;
    }
    await experiencesModel.findByIdAndDelete(experience._id);
    console.log("Experience Deleted Successfully");
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}
