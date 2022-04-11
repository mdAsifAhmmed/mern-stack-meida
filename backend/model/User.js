import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // userId: {
  //   type: String,
  //   required: true,
  // },
  // ImageUrl: {
  //   type: String,
  //   required: true,
  // },
  FName: {
    type: String,
    required: true,
  },
  LName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },

  password:{
    type:String,
    required:true
  },
  repassword:{
    type:String,
    required:true
  },

});

const user = mongoose.model('user', UserSchema)

export default user
