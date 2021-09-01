const User = require('../models/User');

const userController = {
  create: async (req, res) => {
    try{
      const { firstname, email, password, age, dob } = req.body;
      let existingUser = await User.findOne({ email });
      console.log('exisiting User', existingUser);

      if(existingUser){
        res.status(400).send({
          message: "User Already Exists",
          status: false
        })
      }

      const user = new User({
        firstname,
        email,
        password,
        age,
        dob,
      })
      const newUser = await user.save();
      
      res.status(200).send({
        message: "user created successfully",
        status: true,
        newUser,
      })
    }catch(err){
      console.log("error", err);
      res.status(400).send({
        message: "user not created",
        status: false
      })
    }
  },
}

module.exports = userController;


// false null undefined 0 
// Query functions in mongodb
// Model.find()
// Model.updateOne()
// Model.updateMany()
// Model.deleteOne()
// Model.deleteMany()

// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndUpdate()
// Model.findOneAndDelete()
// Model.findOneAndUpdate()
// Model.findOneAndReplace()


