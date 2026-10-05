import  express  from "express";
import autheroute from "./src/routes/authroute.js"
import post from "./src/routes/postrouter.js"
import router from "./src/routes/authroute.js";
import use from "./src/routes/userroute.js"



const app=express()

app.use(express.json())

app.get("/",(_req,res)=>{
    res.json({message:"instagram api is running"})
})

app.use("/api/auth",autheroute)
app.use("/api/post",post)
app.use("/api/get",use)


export default app