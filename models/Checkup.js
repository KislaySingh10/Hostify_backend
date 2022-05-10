import mongoose from 'mongoose'

var checkupSchema = new mongoose.Schema({
    
    age: Number,
    symptoms:String,
    status: {
        type: String,
        default: 'pending'
    },
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true
    },
    college: String,
    time:String,
    date:Date
})

const Checkup= mongoose.model("Checkup",checkupSchema)
export default Checkup;