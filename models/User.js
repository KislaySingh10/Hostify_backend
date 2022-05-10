import mongoose from "mongoose"

var UserSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    role: String,
    vaccine:{
        type:String,
        default: 'no'
    },
    college: String,
    covid:{
        type:String,
        default:'negative'
    }
}, {
    timestamps: true
})


const User = mongoose.model("User", UserSchema);
export default User