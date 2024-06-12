import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "work-experience",
  },
});

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
