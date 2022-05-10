import mongoose from 'mongoose'
import express  from 'express'
import infoRouter from "./routers/infoRouter.js"
import userRouter from "./routers/userRouter.js"
import requestRouter from "./routers/requestRouter.js"

const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/covidcollege',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

app.use("/api/info",infoRouter);

app.use("/api/users",userRouter);
app.use('/api/request',requestRouter);
app.get('/', (req, res) => {

    College.find({}, (err, foundCollege)=> {
                    
        User.find({}, (err, foundUser)=> {
                    
            if(err){
                console.log(err);
            }
            else{
                res.send({ users: foundUser, colleges: foundCollege});
            }
        })
    })

})


app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})
const port=process.env.PORT || 5000
app.listen(port);











