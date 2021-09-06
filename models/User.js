const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  },
  followers: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      dateTime: {
        type: Date,
        required: true
      },
      name: {
        type: String
      }
    }
  ]

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



// SubDocuments
// Nested Document or Document inside another document or child schema

// {
//   {
//     "_id":{"$oid":"612fa27cf7a256a027d1b276"},
//     "active":true,
//     "firstname":"navneet",
//     "email":"testing1@gmail.com",
//     "password":"1234567",
//     "age":{"$numberInt":"20"},
//     "dob":{"$date":{"$numberLong":"1008095400000"}},
//     "__v":{"$numberInt":"0"}
//     "followers": [
//       {
//         id: {"$oid":"1339488d23bd96a1e617e40"},
//         name: "testing",
//         dateTime: {"$date":{"$numberLong":"1008095400000"}}
//       },
//       {
//         id: {"$oid":"1339488d23bd96a1e617e41"},
//         name: "testing",
//         dateTime: {"$date":{"$numberLong":"1008095400000"}}
//       }
//     ]
//   }
// }


