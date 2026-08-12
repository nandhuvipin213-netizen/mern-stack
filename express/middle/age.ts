import express, { type Application,type Request,type Response, type NextFunction } from "express"

const app:Application=express()

function age(req:Request,res:Response,next:NextFunction){
    console.log("age verification")
    const age=Number(req.query.age)
    if(age>=18){
        next()
    }
    else{
       res.send("note eligible");
        
    }
}
app.get("/age",age,(req,res)=>{
    res.send("eligible")
})

const port:Number=7000
app.listen(port,()=>{
    console.log(`server listen ${port}`);
    
})