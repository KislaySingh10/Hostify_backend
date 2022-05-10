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
const infoRouter=express.Router();

infoRouter.get('/get_individual/:id', isAuth , expressAsyncHandler(async(req, res) => {

    let cup= await Checkup.find({user:req.params.id})
    cup=cup?cup:[]
    
    let arr= await Arrival.find({user:req.params.id})
    arr=arr?arr:[]
                
    let leave=await  Leave.find({user:req.params.id})
    leave=leave?leave:[]
                    
    let order= await Order.find({user:req.params.id})
    order=order?order:[]
                        
    let hostel= await Hostel.find({})
    hostel=hostel?hostel:[]
                        
    let user= await User.find({user:req.params.id})
    user=user?user:[]
    
    let help=await Help.find({})
    help=help?help:[] 
    
    res.send({checkups: cup, arrivals: arr, leaves: leave, orders: order, hostel: hostel, user: user,help:help});
    
}))

infoRouter.get('/get_all', isAuth ,expressAsyncHandler(async(req,res)=>{
    let cup= await Checkup.find({status:"pending"})
    cup=cup?cup:[]
    
    let arr= await Arrival.find({status:"pending"})
    arr=arr?arr:[]
                
    let leave=await  Leave.find({status:"pending"})
    leave=leave?leave:[]
                    
    let order= await Order.find({status:"pending"})
    order=order?order:[]
                        
    let hostel= await Hostel.find({})
    hostel=hostel?hostel:[]
                        
    let user= await User.find({})
    user=user?user:[]

    let complaint= await Feedback.find({})
    complaint=complaint?complaint:[]

    let help=await Help.find({})
    help=help?help:[] 
    
    res.send({checkups: cup, arrivals: arr, leaves: leave, orders: order, hostel: hostel, user: user,complaints:complaint,help:help});
}))

infoRouter.get('/get_feedbacks',isAuth,expressAsyncHandler(async(req,res)=>{
    let feeds= await Feedback.find({})
    res.send(feeds)
}))

infoRouter.get('/get_users', expressAsyncHandler(async(req,res)=>{
    let users = await User.find({role:"Student"})
    res.send({users})
    
}))

infoRouter.put('/checkup/:id/approve', (req,res) => {

    Checkup.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Approved"})
        }
    })

})

infoRouter.put('/checkup/:id/reject', (req,res) => {

    Checkup.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Rejected"})
        }
    })

})

infoRouter.put('/complaint/:id/approve', (req,res) => {

    Feedback.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Approved"})
        }
    })

})

infoRouter.put('/complaint/:id/reject', (req,res) => {

    Feedback.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Rejected"})
        }
    })

})

// Arrival



infoRouter.put('/arrival/:id/approve', (req,res) => {

    Arrival.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Approved"})
        }
    })

})

infoRouter.put('/arrival/:id/reject', (req,res) => {

    Arrival.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Rejected"})
        }
    })

})

//

// Leave


infoRouter.put('/leave/:id/approve', (req,res) => {

    Leave.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Approved"})
        }
    })

})

infoRouter.put('/leave/:id/reject', (req,res) => {

    Leave.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Rejected"})
        }
    })

})

//

// Leave



infoRouter.put('/order/:id/approve', (req,res) => {

    Order.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Approved"})
        }
    })


})

infoRouter.put('/order/:id/reject', (req,res) => {

    Order.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send({message:"Rejected"})
        }
    })


})

//

infoRouter.post('/addcollege', (req, res)=> {

    var newCollege = new College({
        name: req.body.name,
    });

    newCollege.save((err, college)=> {
        if(err){
            res.send(err);
        } else{
            res.send(college);
        }
    })

});

infoRouter.post('/addhostel', (req, res)=> {

    var newHostel = new Hostel({
        name: req.body.name,
        college:'IIITM'
    });


    newHostel.save((err, Hostel)=> {
        if(err){
            res.send(err);
        } else{
            res.status(201).send("Hostel Added")
        }
    })

});

infoRouter.put('/hostel/:id/approve', (req,res) => {

    Hostel.findByIdAndUpdate( req.params.id , {status: 'acc'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send("Hostel Sanitized")
        }
    })

})

infoRouter.put('/hostel/:id/prog', (req,res) => {

    Hostel.findByIdAndUpdate( req.params.id , {status: 'pending'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
            res.status(201).send("Hostel Being Sanitized")
        }
    })


})


export default infoRouter;
