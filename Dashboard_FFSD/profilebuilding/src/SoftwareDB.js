const mongoose = require("mongoose");

const softwareSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Freelance",
      "Professional",
      "Software",
      "Part time",
      "Seminars",
      "Others",
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills_required: {
    type: String,
    required: true,
  },
  workmode: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  salary:{
    type: Number,
    required: true,
  }
});

const SoftwareDB = mongoose.model("software", softwareSchema);

module.exports = SoftwareDB;
