import mongoose from "mongoose";

const Profile =mongoose.Schema ({
    
     firstName:{
        type: String,
        required:[true,"Please add a name"]
    },
      lastName:{
        type: String,
        required:[true,"Please add a name"]
    },
      farmName:{
        type: String,
       
    },
      email:{
        type: String,
        unique: true,
        required:[true,"Please add an Email"],
        trim: true,
       
          },
      profile:{
        type: String,
        
       
    }, 
      bio:{
        type: String,
        
             
    }, 
},{timestamps: true});

export default mongoose.model('Profiles', Profile);