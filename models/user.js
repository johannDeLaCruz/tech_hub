import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists!"],
    lowercase: true,
    match: [
      /^[A-Za-z][A-Za-z0-9_]{4,29}$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already registered!"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  // password: {
  //   type: String,
  //   required: [true, "Password is required"],
  //   minlength: [6, "Password must be at least 6 characters"],
  //   match: [
  //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
  //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  //   ],
  // },
  avatar: {
    type: String,
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const User = models.User || model("User", userSchema);
//the "models.User" is needed here for NextAuth serverless specifications

module.exports = User;
