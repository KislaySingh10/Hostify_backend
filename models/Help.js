import mongoose from 'mongoose';

var helpSchema = new mongoose.Schema({
    
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true
    },
    username:String,
    college: {type:String},
    room:Number,
    hostel:String,
    mobile:Number,
    requirement:String,
    urgent:String,
    message:{
        type:String,
        default:"Please Help"
    }

})
const Help = mongoose.model("Help", helpSchema);
export default Help