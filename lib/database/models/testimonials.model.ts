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
  type: {
    type: String,
    default: "testimonials",
  },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialsSchema);
