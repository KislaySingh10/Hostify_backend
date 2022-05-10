import mongoose from 'mongoose'

var hostelSchema = new mongoose.Schema({
    name:String,
    status:{
        type: String,
        default: 'reject'
    },
    college: {type:String,required:true}
}, {
    timestamps: true
})

const Hostel = mongoose.model("Hostel", hostelSchema);
export default Hostel