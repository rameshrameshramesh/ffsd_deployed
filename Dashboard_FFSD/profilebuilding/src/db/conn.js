const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/user_profile_details")
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((error) => {
    console.error(`Connection error: ${error.message}`);
  });
