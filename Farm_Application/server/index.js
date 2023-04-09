import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorHandler from "./middleWare/errorMiddleware.js"
import userRoute from "./routes/userRoute.js"
import postRoutes from "./routes/posts.js"
import AssetRoute from "./routes/AssetRoute.js"
import DoctorRoute from "./routes/DoctorRoute.js"
import SiblingRoute from "./routes/SiblingRoute.js"
import TransactionRoute from "./routes/TransactionRoute.js"
import profileRoute from "./routes/profileRoutes.js"




const app=express();

dotenv.config();

// setting app storage
app.use(bodyParser.json({limit:"30mb", extended:"true"}));
// send requests

app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}));
app.use(cookieParser());
app.use(cors());
 
app.use('/posts', postRoutes);
app.use(AssetRoute);
app.use(DoctorRoute);
app.use(SiblingRoute);
app.use(TransactionRoute);
app.use(profileRoute);


app.use("/api/users",userRoute);

 app.use(errorHandler);
 
// PORT
const PORT= process.env.PORT || 5000;
import Post from './models/imageModel.js'

app.post('/uploads', async(req,res) => {
    const body = req.body;

    try {
        const newImage = await Post.create(body)
        newImage.save();
        res.status(201).json({msg: "New Image Uploaded"})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
});
//get images
app.get('/uploads', async(req,res) => {
    try {
        const post= await Post.find();
            res.json(post);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
// delete image
app.delete('/uploads-delete/:id',async(req,res)=> {
    try {
        const deleteImage= await  Post.deleteOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(deleteImage);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});




// connect to db
mongoose.connect( process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=> console.log(`server running on port:${PORT}`)))
.catch((error)=>console.log(error.message));





