import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    
    myImage: String
})

export default mongoose.model('post',postSchema)