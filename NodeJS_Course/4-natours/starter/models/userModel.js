const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
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
    validate: {
      // This only works on CREATE AND SAVE
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
});

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
