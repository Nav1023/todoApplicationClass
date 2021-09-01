const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  }

})

module.exports = User = mongoose.model('user', UserSchema);


// String,
// Number
// Date,
// Boolean,
// ObjectId,
// Array,
// Object,
// Decimal