import mongoose from "mongoose";

const sibling =mongoose.Schema ({
  
    sibling:{
        type:String,
       
    
    },
    sex:{
        type:String,
       
    },
     age: {
        type: String,
       
    },
     selectFiles: {
        type: String,
       
        
    },

},{timestamps: true});
export default mongoose.model('Siblings',sibling);