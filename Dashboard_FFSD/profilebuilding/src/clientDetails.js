const mongoose = require("mongoose");

const clientDetailsSchema = new mongoose.Schema({
  organisation_name: String,
  email: String,
  phone: String,
  address: String,
  bio: String,
  experience: String,
});

const latestClientSchema = new mongoose.Schema(
  {
    organisation_name: String,
    email: String,
    phone: String,
    address: String,
    bio: String,
    experience: String,
  },
  { timestamps: true }
);

const ClientDetails = mongoose.model("ClientDetails", clientDetailsSchema);
const LatestClient = mongoose.model("LatestClient", latestClientSchema);

module.exports = { ClientDetails, LatestClient };
