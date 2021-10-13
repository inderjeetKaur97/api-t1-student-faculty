const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  enrollment: { type: Number, unique: true, required: true },
  // branch:String,
  // year:Number,
  // semester:Number,
  contact: { type: Number, unique: true, required: true },
  email: { type: String, required: true },
});
const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;

/*{
    "name":"inderjeet",
    "dob":"1997-09-15",
    "enrollment":160420109015,
    "contact":9998902636,
    "email":"ik@gmail.com"
}
*/
