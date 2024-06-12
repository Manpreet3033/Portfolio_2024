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
  type: {
    type: String,
    default: "projects",
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
