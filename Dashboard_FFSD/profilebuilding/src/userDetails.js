const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  address: String,
  job_position: String,
  organization: String,
  experience: String,
  graduated: String,
  qualification: String,
  graduation_year: String,
  institute_name: String,
});

const latestUserSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address: String,
    job_position: String,
    organization: String,
    experience: String,
    graduated: String,
    qualification: String,
    graduation_year: String,
    institute_name: String,
  },
  { timestamps: true }
);

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);
const LatestUser = mongoose.model("LatestUser", latestUserSchema);

module.exports = { UserDetails, LatestUser };
