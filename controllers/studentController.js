const path = require("path");
const Student = require("../models/student");
const studentController = {
  home: (req, res) => {
    res.render("home.ejs");
  },
  getstudents: async (req, res) => {
    try {
      const allstudent = await Student.find();
      res.render("student", { allstudent });
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).sendFile(path.join(__dirname, "../error/error.html"));
    }
  },
  insertPage: (req, res) => {
    res.render("form.ejs");
  },
  createStudent: async (req, res) => {
    try {
      req.body.ip = req.ip;
      await Student.create(req.body);
      res.redirect("/getdata");
    } catch (error) {
      console.error("Error creating student:", error);
      res.status(500).sendFile(path.join(__dirname, "../error/error.html"));
    }
  },
  editPage: async (req, res) => {
    try {
      const data = await Student.findById(req.params.userid);
      res.render("edit", { data });
    } catch (error) {
      console.error("Error loading edit page:", error);
      res.status(500).sendFile(path.join(__dirname, "../error/error.html"));
    }
  },
  updateStudent: async (req, res) => {
    try {
      await Student.findByIdAndUpdate(req.params.userid, req.body, {
        new: true,
      });
      res.redirect("/getdata");
    } catch (error) {
      console.error("Error updating student:", error);
      res.status(500).sendFile(path.join(__dirname, "../error/error.html"));
    }
  },
  deleteStudent: async (req, res) => {
    try {
      await Student.findByIdAndDelete(req.params.id);
      res.redirect("/getdata");
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).sendFile(path.join(__dirname, "../error/error.html"));
    }
  },
  searchPage: (req, res) => {
    res.render("search");
  },

  searchName: async (req, res) => {
    try {
      const studentName = req.query.name;

      const students = await Student.find({
        name: { $regex: studentName, $options: "i" },
      });

      res.render("find", {
        students,
        searchedQuery: studentName,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = studentController;
