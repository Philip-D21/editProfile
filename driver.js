const mongoose = require('mongoose');


const validator = reqquire("validator");
const bcrypt = require("bcryptjs");
jwt = require("jsonwebtoken");



//creating the driver schema 
const driverSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        min:[3,"username must be more than 3 characters"],
        max:[15,"Should not be more than 13 characters long"]
    },

    first_Name:{
        type: String,
         required:[true, "please provide your first name" ],
         trim:true,
    },
    phone_Number:{
        type: String,
        required:[true,"please provide you rnumber"]
    },

    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "Please provide email"],
        validate: {
          validator: validator.isEmail,
          message: "Please provide valid email",
        },
    },
    BVN:{
        type:Number,
        require:[true, "please provide your BVN"]
    },
    address:{
        type:String,
        require:[true,"please provide your address"]
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: [6, "Please provide a password longer than your input"],
      },
      confirmpassword: {
        type: String,
        reuired: [true, "Please confirm your Password"],
      },

      roles: {
        type: String,
        enum: ["admin", "driver"],
        default: "driver",
      },
       /** User model has a resetpassword  field link. This is for password reset. **/
       resetLink: {
        data: String,
        default: ''
    },
},

    { timestamps: true }
);


//hashing the password and adding salt

UserSchema.pre("save", async function () {
    if (!this.isModified("password", "confirmpassword")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
   UserSchema.pre("save", async function () {
     if (!this.isModified("confirmpassword")) return;
    const salt = await bcrypt.genSalt(10);
     this.confirmpassword = await bcrypt.hash(this.confirmpassword, salt);
   });
  
  UserSchema.methods.generateJwt = function () {
    const token = jwt.sign({
      _id: this._id,
      phonenumber: this.phonenumber
    }, process.env.JWT_SECRET_KEY, { expiresIn:'7d'});
  
    return token
  }
  
  module.exports = mongoose.model("driver", driverSchema);
  