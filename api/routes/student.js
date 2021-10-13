var Router = require("router");
var router = Router();
const studentModel = require("../models/student");

router.get("/", async (req, res) => {
  try {
    const studentFind = await studentModel.find();
    // console.log(studentFind[2])
    res.status(200).json({
      studentList: studentFind,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Bad Request",
    });
  }
});
router.get("/:enrollment", async (req, res) => {
  // console.log(req.params.enrollment)
  searchEnroll = req.params.enrollment;
  // console.log(searchName)
  try {
    const findStudent = await studentModel.find({ enrollment: searchEnroll });
    res.status(200).json({
      searchResult: findStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Bad Request",
    });
  }
});

//------------------post req---------------------------------

router.post("/", async (req, res) => {
  const studentData = new studentModel(req.body);
  try {
    const saveStudent = await studentData.save();
    res.status(200).json({
      newStudent: saveStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Bad Request",
    });
  }
  console.log(req.body);
});

//------------------put req---------------------------------
router.put("/:enrollment", async (req, res) => {
  updateEnroll = req.params.enrollment;
  try {
    const studentUp = await studentModel.findOneAndUpdate(
      { enrollment: updateEnroll },
      {
        $set: {
          name: req.body.name,
          dob: req.body.dob,
          enrollment: req.body.enrollment,
          contact: req.body.contact,
          email: req.body.email
        },
      }
    );
    res.status(200).json({
      updatedStudent: studentUp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Bad Request",
    });
  }
});

//------------------delete req---------------------------------
router.delete("/:enrollment", async (req, res) => {
  delEnroll = req.params.enrollment;
  try {
    const studentDel = await studentModel.deleteOne({ enrollment: delEnroll });
    res.status(200).json({
      deleltedStudent: studentDel,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Bad Request",
    });
  }
});

module.exports = router;
