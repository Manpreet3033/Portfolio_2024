import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
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
  liveLink: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "projects",
  },
});

export default mongoose.models.Projects ||
  mongoose.model("Projects", ProjectSchema);
