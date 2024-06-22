"use server";

import contactModel from "../database/models/contact.model";
import { connectToDatabase } from "../database/mongoose";

export async function addContactDetails(
  name: string,
  email: string,
  message: string
) {
  try {
    await connectToDatabase();
    const newContact = new contactModel({
      name: name,
      email: email,
      message: message,
    });
    await newContact.save();
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function getAllContacts() {
  try {
    await connectToDatabase();
    const contacts = await contactModel.find({});
    const allContacts = contacts.map((contact) => ({
      ...contact.toObject(),
      _id: contact._id.toString(),
    }));
    return { allContacts: allContacts };
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}
