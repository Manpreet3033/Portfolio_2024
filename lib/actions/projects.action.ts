"use server";

import { AddProjectProps, DeleteProjectProps } from "@/utils";
import { connectToDatabase } from "../database/mongoose";
import projectsModel from "../database/models/projects.model";
import { revalidatePath } from "next/cache";

export async function addProject(
  title: string,
  description: string,
  imgUrl: string | undefined,
  liveLink: string,
  path: string
) {
  try {
    await connectToDatabase();
    const newProject = new projectsModel({
      title: title,
      description: description,
      imgUrl: imgUrl,
      liveLink: liveLink,
    });
    await newProject.save();
    revalidatePath(path);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getProjectById(id: string) {
  try {
    await connectToDatabase();
    const projectDoc = await projectsModel.findById(id);
    const project = projectDoc.toObject();
    if (project) {
      project._id = project._id.toString();
    }
    return { project };
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function updateProject(
  _id: string,
  title: string,
  description: string,
  imgUrl: string,
  liveLink: string
) {
  try {
    await connectToDatabase();
    const updatedProject = await projectsModel.findByIdAndUpdate(
      _id,
      {
        title: title,
        description: description,
        imgUrl: imgUrl,
        liveLink: liveLink,
      },
      { new: true }
    );
    revalidatePath(`/dashboard/projects`);
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
}

export async function getAllProjects() {
  try {
    await connectToDatabase();
    const projects = await projectsModel.find({});
    const allProjects = projects.map((project) => ({
      ...project.toObject(),
      _id: project._id.toString(),
    }));
    return { allProjects };
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
