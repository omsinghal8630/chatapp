import mongoose ,{Schema} from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
    required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        unique:true
    },
    confirmPassword: {
        type: String,
        
        
    }
}, { timestamps: true })  //createdAt & updatedAt
const User = mongoose.model("User", userSchema)
export default User
