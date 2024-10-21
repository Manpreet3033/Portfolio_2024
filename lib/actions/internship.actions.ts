"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import internshipModel from "../database/models/internship.model";

export async function addInternship(
  title: string,
  imgUrl: string | undefined,
  path: string
) {
  try {
    await connectToDatabase();
    const newInternship = new internshipModel({
      company: title,
      imgUrl: imgUrl,
    });
    await newInternship.save();
    revalidatePath(path);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

export async function getAllInternships() {
  try {
    connectToDatabase();
    const internships = await internshipModel.find({}, {}, { new: true });
    const allInternships = internships.map((exp) => ({
      ...exp.toObject(),
      _id: exp._id.toString(),
    }));
    return { allInternships };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getInternshipById(id: string) {
  try {
    await connectToDatabase();
    const internshipDoc = await internshipModel.findById(id, {}, { new: true });
    const internship = internshipDoc.toObject();
    if (internship) {
      internship._id = internship._id.toString();
    }
    return { internship };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function updateInternship(
  _id: string,
  title: string,
  imgUrl: string | undefined,
  path: string
) {
  try {
    await connectToDatabase();
    const updatedExperience = await internshipModel.findByIdAndUpdate(
      _id,
      {
        company: title,
        imgUrl: imgUrl,
      },
      { new: true }
    );
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function deleteInternship({
  id,
  path,
}: {
  id: string;
  path: string;
}) {
  try {
    await connectToDatabase();
    const internship = await internshipModel.findById(id);
    if (!internship) {
      console.log("Internship not found....");
      return;
    }
    await internshipModel.findByIdAndDelete(internship._id);
    console.log("Internship Deleted Successfully");
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}
