import express from "express"
import User from "../models/User.js"
import expressAsyncHandler from "express-async-handler"
import { generateToken, isAuth } from "../utils.js";
import bcrypt from "bcryptjs";

const userRouter=express.Router();

userRouter.post('/register', expressAsyncHandler(async(req, res) => {
    var newUser = new User({name: req.body.name, email: req.body.email, password:bcrypt.hashSync(req.body.password,8), role: req.body.role,college:req.body.college});
    console.log(newUser)
    // newUser.college.id = req.body.college;

    // College.findById(req.body.college, (err, college) => {
    //     newUser.college.name = college.name;
    // })
    let createdUser=await newUser.save();
    res.send({
        _id:createdUser._id,
        name:createdUser.name,
        email:createdUser.email,
        role:createdUser.role,
        college:createdUser.college,
        token:generateToken(createdUser)
    })
}))


userRouter.post("/signin",expressAsyncHandler(async(req,res) => {
        const user= await User.findOne({email:req.body.email});
        if(user){
            console.log(user)
            if(bcrypt.compareSync(req.body.password,user.password)){
                res.send({
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role,
                    token:generateToken(user)
                });
                return;
            }
        }
        res.status(401).send({message:"Invalid email or password"});
    }))


export default userRouter;