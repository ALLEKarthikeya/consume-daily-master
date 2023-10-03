const mongoose = require('mongoose');

// Define the review schema
const reviewSchema = new mongoose.Schema({
  author:String,
  rating: {
      type: Number,
      required: true,
      min:0,
      max: 5
  },
  reviewText: String,
  createdOn:{
      type: Date,
      default: Date.now
  }
});

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema], 

  lastLogin: {
    type: Date,
    default: null, 
  },
  loginAttempts: {
    type: Number,
    default: 0,
  },
  locked: {
    type: Boolean,
    default: false,
  },
});


const User = mongoose.model('User', userSchema);


module.exports = {
  User,
  Review,
};