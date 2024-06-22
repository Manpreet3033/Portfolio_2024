"use server";
import nodemailer from "nodemailer";
import {
  adminTestimonialsMail,
  testimonialsMail,
} from "@/utils/helpers/mail/testimonialMailTemplate";
import {
  adminContactMail,
  contactMailTemplate,
} from "./mail/contactMailTemplate";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (
  name: string,
  company: string,
  review: string,
  email: string
) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Testimonial Submission Confirmation",
    html: testimonialsMail(name),
  };

  const mailOptions2 = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Testimonial Submission Verification",
    html: adminTestimonialsMail(name, company, review),
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptions2);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const contactEmailSend = async (
  name: string,
  email: string,
  message: string
) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Contact Form Confirmation",
    html: contactMailTemplate(name, email, message),
  };
  const mailOptions2 = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Someone Tried to Contact You",
    html: adminContactMail(name, email, message),
  };
  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptions2);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
