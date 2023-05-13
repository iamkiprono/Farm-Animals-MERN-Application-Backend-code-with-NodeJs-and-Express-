const mongoose = require("mongoose");

const cowSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a cow name"],
    },
    age: {
      type: Number,
      required: [true, "Cow age is required"],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('cow', cowSchema)