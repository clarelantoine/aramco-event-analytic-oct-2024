// Define schema
import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema({
  question_1: { type: String, required: true },
  question_2: { type: String, required: true },
  question_3: { type: String, required: true },
  feedback: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

// Compile model from schema
const Survey1 = mongoose.model("surveys1", SurveySchema);
const Survey2 = mongoose.model("surveys2", SurveySchema);

export { Survey1, Survey2 };
