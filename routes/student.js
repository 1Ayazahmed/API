const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// Create a new Student
router.post("/student", async (req, res) => {
  try {
    console.log(req.body);
    const student = new Student({
      name: req.body.name,
      semester: req.body.semester,
      age: req.body.age,
      address: req.body.address,
    });

    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all Student
router.get("/student", async (req, res) => {
  try {
    const student = await Student.find();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Student by ID
router.put("/student/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a Student by ID
router.delete("/student/delete", async (req, res) => {
  try {
    const student = await Student.find();

    for (const p of student) {
      const deletedStudent = await Student.findByIdAndRemove(p.id);
    }
    console.log("Students Deleted");
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
