import mongoose from "mongoose";

const Doctor =mongoose.Schema ({
    doctor:{
        type:String,
       
    
    },
    dueDate:{
        type:Date,
       
    },
     description: {
        type: String,
       
    },
     event: {
        type: String,
       
        
    },
     question: {
        type: String,
        
    }

},{timestamps: true});
export default mongoose.model('Doctors',Doctor);