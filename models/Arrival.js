import mongoose from 'mongoose'

var arrivalSchema = new mongoose.Schema({
    
    branch:String,
    address: String,
    between: Date,
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

const Arrival= mongoose.model("Arrival",arrivalSchema)
export default Arrival;