import mongoose from "mongoose";

const TestimonialsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "testimonials",
  },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialsSchema);
