const mongoose = require('mongoose')


const commonSchema = new mongoose.Schema({
    name:String,
    lastname:String
})


const Common  = new mongoose.model('Common',commonSchema)

module.exports = Common