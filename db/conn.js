const mongoose = require('mongoose')
main()
async function main() {
    try {
    await mongoose.connect('mongodb://localhost:27017/t1-student-faculty-api');
    console.log("db is connected  successfully")
        
    } catch (error) {
        console.log("db not connected - ",error)
    }
  }
