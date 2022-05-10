import mongoose from 'mongoose'

var collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const College= mongoose.model("College",collegeSchema)
export default College