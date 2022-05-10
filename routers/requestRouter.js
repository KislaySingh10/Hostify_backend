import express from "express"
import Checkup from "../models/Checkup.js";
import Arrival from "../models/Arrival.js"
import Leave from "../models/Leave.js"
import Order from "../models/Order.js"
import Hostel from "../models/Hostel.js"
import User from "../models/User.js"
import expressAsyncHandler from "express-async-handler"
import { isAuth } from "../utils.js";
import Feedback from "../models/Feedback.js";
import Help from "../models/Help.js";
const requestRouter=express.Router();

requestRouter.post('/create_feedback',isAuth,expressAsyncHandler(async(req,res)=>{
    var newFeed= new Feedback({
        hostel:req.body.hostel,
        room:req.body.room,
        user:req.user._id,
        feedback:req.body.feedback,
        mobileno:req.body.mobileno
    })
    var feed= await newFeed.save()
    res.send(feed)
})) 

requestRouter.post('/seekhelp',isAuth,expressAsyncHandler(async(req,res)=>{
    var newhelp= new Help({
        hostel:req.body.hostel,
        room:req.body.room,
        user:req.user._id,
        username: req.user.name,
        requirement:req.body.requirement,
        mobile:req.body.mobile,
        urgent:req.body.urgent,
        message:req.body.message
    })
    var help= await newhelp.save()
    res.send(help)
}))

requestRouter.post('/checkup', isAuth, expressAsyncHandler(async(req, res)=> {

    var newCheckup = new Checkup({
        age: req.body.age,
        symptoms: req.body.symptoms,
        date:req.body.date,
        time:req.body.time,
        user:req.user._id,
        college:req.user.college
    });

    var newCheck = await newCheckup.save()
    res.send(newCheck)

}));
requestRouter.post('/arrival', isAuth, expressAsyncHandler(async(req, res)=> {

    var newArrival = new Arrival({
        branch: req.body.branch,
        address: req.body.address,
        between: req.body.between,
        to: req.body.to,
        hostel: req.body.hostel,
        mobileno: req.body.mobileno,
        covid: req.body.covid,
        user:req.user._id,
        college:req.user.college
    });

    const newArr=await newArrival.save()
    res.send(newArr)
}));

requestRouter.post('/leave', isAuth, expressAsyncHandler(async(req, res)=> {

    var newLeave = new Leave({
        branch: req.body.branch,
        address: req.body.address,
        days: req.body.days,
        from: req.body.from,
        to: req.body.to,
        hostel: req.body.hostel,
        mobileno: req.body.mobileno,
        covid: req.body.covid,
        user:req.user._id,
        college:req.user.college
        
    });

    const lev= await newLeave.save()
    res.send(lev)
}));

requestRouter.post('/order', isAuth, expressAsyncHandler(async(req, res)=> {

    var newOrder = new Order({
        hostel: req.body.hostel,
        mobileno: req.body.mobileno,
        from: req.body.from,
        item: req.body.item,
        user:req.user._id,
        college:req.user.college
        
    });

    const order=await newOrder.save();
    res.send(order)

}));


export default requestRouter;