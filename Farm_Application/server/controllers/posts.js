import mongoose from "mongoose";
import PostMessage from "../models/postsMessage.js";


 export const getPosts= async(req,res)=>{
try {
    // retive data from database
    const postMessage= await PostMessage.find();

    // if everything is ouky
    res.status(200).json(postMessage);
} catch (error) {
    res.status(404).json({message: error.message});
}
}

// creating  post
export const createPost=async (req,res)=>{
      const post= req.body;
    // create new post
    const newPost= new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message:error.message});
    }

}

// updating post
export const updatePost = async (req,res) => {
    const {id: _id} = req.params;
    const post = req.body;

if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post id of id');

   const updatedPost= await PostMessage.findByIdAndUpdate(_id, { ...post,_id}, {new: true});

   res.json(updatedPost);  
}
// delete post function
export const deletePost = async(req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post id of id');

    await PostMessage.findByIdAndRemove(id);

    console.log('DELETE');

    res.json({message: 'post deleted successfully'});
}