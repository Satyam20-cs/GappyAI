import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["applied", "interview", "offer", "rejected"],
      default: "applied",
    },

    jobLink: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Application", applicationSchema);