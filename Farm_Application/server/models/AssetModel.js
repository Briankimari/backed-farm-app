import mongoose from "mongoose";

const Asset =mongoose.Schema ({
    asset:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    value:{
        type:Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
},{timestamps: true});

export default mongoose.model('Assets', Asset);