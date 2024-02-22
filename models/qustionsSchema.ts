import mongoose, { Schema, model } from "mongoose";
import { Questions } from "@/interfaces";


const questionSchema = new Schema<Questions>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    isSolved: {
      type: Boolean,
      default: false,
    },
    addilinks: {
      type: String,
    },
  },
  { timestamps: true }
);

const QuestionModel =
  mongoose.models.Question || model("Question", questionSchema);

export default QuestionModel;
