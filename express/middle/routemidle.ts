import express, { type Application, type NextFunction ,type Request,type Response} from "express"


const app:Application=express()

function checkuser(req:Request,res:Response,next:NextFunction){
    console.log("check user");
    next()   
}
app.get("/a",checkuser,(req,res)=>{
    res.send("about")
})
app.get("/",(req,res)=>{
    res.send("byy")
})

const port:number=6000
app.listen(port,()=>{
    console.log(`server listen ${port}`)
})