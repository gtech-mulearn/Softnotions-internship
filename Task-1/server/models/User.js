const mongoose = require('mongoose');
const {
    isAlpha,
  isNumeric,
  } = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    fullName: {
        type: String,
        required: [true, "Please enter first name"],
        minlength: [2, "Full name should atleast be 2 characters"],
        maxlength: [50, "Full name should not exceed 25 characters"],
    },
    age: {
        type: Number,
        required: [true, "Please enter age"],
        min: [18,"Age must be atleast 18"],
        max: [100,"Age must not exceed 100"],
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
