import express, {  type Application } from "express"

const app:Application=express()

// app.get("/query",(req,res)=>{
//     const {keyword}=req.query
//     res.send(keyword)
// })
app.get("/search",(req,res)=>{
    const{catagory,price,brand}=req.query
    res.json({catagory,price,brand})
})
let port=5000
app.listen(port,()=>{
    console.log(`server listen on port ${port}`);
    
})