const mongoose = require("mongoose")

const Schema = mongoose.Schema


const exerciseSchema = new Schema({
    username: {type: String, required: true},
    username: {type: String, required: true},
    username: {type: Number, required: true},
    username: {type: Date, required: true},
    },

    {
        timestamps: true
    }
)

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise
