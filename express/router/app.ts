import express, { type Application } from "express"

import user from './product.js'

const app:Application=express()
app.use("/api",user)

const port:number=5000
app.listen(port,()=>{
    console.log(`server listen ${port}`);
    
})