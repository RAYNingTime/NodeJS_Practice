const mongoose = require('mongoose');
const validator = require('validator');

// name, email, photo ( string), password, passwordConfirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please tell us your name!'],
    trim: true,
  },
  email: {
    type: String,
    require: [true, 'Please provide your email'],
    unique: [true, 'This email already used by other user!'],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: [8, 'Password must have at least 8 symbols'],
    trim: true,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
