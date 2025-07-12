import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    _id: {
      type: String, 
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    team_role: {
      type: String,
      required: true,
    },
    teams: {
      type: [String], // Array of team names or IDs
      default: [],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, 
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // Cloudinary URL
      required: true,
    },
    coverImage: {
      type: String, // Cloudinary URL
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
