import mongoose from "mongoose";
 import bcrypt from "bcryptjs"

const userSchema= mongoose.Schema({
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
     
      password:{
        type: String,
        required:[true,"Please add a password"],
        minLength:[6, "password must be up to 6 characters"],
    },
     profile:{
        type: String,
        
        default:"https://i.ibb.co/4pDNDk1/avatar.png",
       
    }, 

},{timestamps: true})

userSchema.pre("save", async function(next) {
if(!this.isModified("password")) {
  return next()
}

 const salt = await bcrypt.genSalt(10);
 const hashedPassword= await bcrypt.hash(this.password, salt);
 this.password= hashedPassword;
next()
})
export default mongoose.model('User', userSchema);