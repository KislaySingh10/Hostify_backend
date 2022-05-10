import mongoose from 'mongoose';

var leaveSchema = new mongoose.Schema({
    
    branch:String,
    address: String,
    days: Number,
    from: Date,
    to: Date,
    hostel: String,
    mobileno:Number,
    covid: String,
    status: {
        type: String,
        default: 'pending'
    },
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true
    },
    college: String
})

const Leave = mongoose.model("Leave", leaveSchema);
export default Leave