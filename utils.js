import jwt from "jsonwebtoken"

export const generateToken=(user)=>{
    return jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        college:user.college
    },process.env.JWT_SECRET || "Covid" ,{
        expiresIn: '30d'
    })
}

export const isAuth=(req,res,next)=>{
    const authorization=req.headers.authorization;
    console.log(req.headers)
    if(authorization){
        const token=authorization.slice(7,authorization.length);
        jwt.verify(token,process.env.JWT_SECRET || "Covid",(err,decode)=>{
            if(err)
                res.status(401).send({message:"Invalid Token"})
            else {
                req.user=decode;
                next();
            }
        })
    }else res.status(401).send({message:"No Token"})
}