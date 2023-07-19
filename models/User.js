import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 7,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    friends: {
        type: Array,
        default: [],
    },
    location: {
      type: String,
      max: 50,
    },
    occupation: String,
    impressions: Number,
    viewedProfile: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
