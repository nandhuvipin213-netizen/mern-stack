import express, { type Application } from "express"

const app:Application=express()

app.use((req,res,next)=>{
    console.log("request accept")
    next()
})
app.use((req,res,next)=>{
    console.log(`method:- ${req.method},${req.url}`)
    next()
})
app.use((req,res,next)=>{
    console.log(`authentication successfull ${new Date().toLocaleString()}`)
    next()
})
app.get("/one",(req,res,)=>{
    res.send("welcome")
})
app.get("/",(req,res)=>{
    res.send("about")
})

const port:number=7000
app.listen(port,()=>{
    console.log(`server listen ${port}`)
})