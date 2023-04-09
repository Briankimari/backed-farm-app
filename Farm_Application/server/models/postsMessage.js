import mongoose from "mongoose";

// setting the schema
const postSchema= mongoose.Schema({
  
title: String,
message: String,
creator: String,
tags: [String],
selectedFiles:String, 
likeCount: {
    type: Number,
    default:0,
},
createdAt: {
    type:Date,
    dafault:new Date()
}
},{timestamps: true});

// turn schema to model
const PostMessage= mongoose.model('PostMessage', postSchema);

export default PostMessage;