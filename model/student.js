const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({
    name:String,
    lastname:String
})


const Student  = new mongoose.model('student',StudentSchema)

module.exports = Student