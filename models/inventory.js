const mongoose = require('mongoose')

const partSchema = new mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year:{type: Number, required: true},
    part_name: {type:String, required: true},
    side: {type:String, default: 'Unknown'},
    description:{type:String, default: 'good'},
})

module.exports = mongoose.model('Part', partSchema)