const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController.js");

router.get("/", studentController.home);

router.get("/getdata", studentController.getstudents);

router.get("/insertdata", studentController.insertPage);

router.post("/createdata", studentController.createStudent);

router.get("/edit/:userid", studentController.editPage);

router.post("/update/:userid", studentController.updateStudent);

router.get("/delete/:id", studentController.deleteStudent);

router.get("/search", studentController.searchPage);

router.get("/searchstudent", studentController.searchName);

module.exports = router;
