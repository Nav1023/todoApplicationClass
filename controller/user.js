const User = require('../models/User');
const bcrypt = require('bcryptjs');

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

      //encrypt the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

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
  login: async(req, res) => {
    // Steps to login api
    // 1. Get the email and password from request.
    // 2. Validate the email and password ( whether it is empty/undefined/null)
    // 3. Fetch the record from DB (database) that matches the email & password.
    // 4. Condition to check whether the record exists or not.
    // 5. Accordingly send the response to the client.
    try{
      const { email, password } = req.body;

      if(!email || !password){
        return res.status(400).send({
          message: 'Email or password is not valid',
          status: false
        });
      }

      const existingUser = await User.findOne({email});

      if(existingUser){
        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
        if(isPasswordMatch){
          return res.status(200).send({
            message: 'Login Successful',
            status: true
          });
        }
      } 
      
      return res.status(200).send({
        message: 'Wrong Email or password',
        status: true
      });

    } catch(e){
      return res.status(400).send({
        message: 'Something went wrong!! Please try again later',
        status: false
      });
    }
    
  }
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


