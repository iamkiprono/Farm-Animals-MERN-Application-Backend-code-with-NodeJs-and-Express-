const mongoose = require("mongoose");

const cowSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a cow name"],
    },
    dob: {
      type: Date,
      required: [true, "Cow's Date of Birth is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cow", cowSchema);
