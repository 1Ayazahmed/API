const mongoose = require("mongoose");

// Define the product schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    default: Date.now,
  },
});

// Create the Student model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
