import mongoose from "mongoose";

const InternshipModelSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "internship",
  },
});

export default mongoose.models.Internship ||
  mongoose.model("Internship", InternshipModelSchema);
