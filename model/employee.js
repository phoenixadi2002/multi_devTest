const mongoose = require('mongoose')


const EmployeeSchema = new mongoose.Schema({
    name:String,
    lastname:String
})


const Employee  = new mongoose.model('Employee',EmployeeSchema)

module.exports = Employee