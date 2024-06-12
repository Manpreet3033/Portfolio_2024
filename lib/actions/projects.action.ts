"use server";

import { AddProjectProps, DeleteProjectProps } from "@/utils";
import { connectToDatabase } from "../database/mongoose";
import projectsModel from "../database/models/projects.model";
import { revalidatePath } from "next/cache";

export async function addProject(
  title: string,
  description: string,
  imgUrl: string | undefined,
  path: string
) {
  try {
    await connectToDatabase();
    const newProject = new projectsModel({
      title: title,
      description: description,
      imgUrl: imgUrl,
    });
    await newProject.save();
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getAllProjects() {
  try {
    await connectToDatabase();
    const allProjects = await projectsModel.find({});
    return allProjects;
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function deleteProject({ id, path }: DeleteProjectProps) {
  try {
    await connectToDatabase();
    const project = await projectsModel.findById(id);
    if (!project) {
      console.log("Project not found....");
      return;
    }
    await projectsModel.findByIdAndDelete(project._id);
    console.log("Project Deleted Successfully");
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}
