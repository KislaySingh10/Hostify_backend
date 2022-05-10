import mongoose from 'mongoose';

var feedSchema = new mongoose.Schema({
    
    hostel:String,
    room:Number,
    mobileno:Number,
    feedback:String,
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true
    },
    status:{
        type:String,
        default:"pending"
    }
})

const Feedback = mongoose.model("Feedback", feedSchema);
export default Feedback