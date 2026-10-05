import express from "express"
import mongoose from "mongoose";
import router from "./routes/userroutes.js";

const app= express();
app.use("/api/user",router);

mongoose.connect("mongodb+srv://nandhuvipin213_db_user:nandu123@cluster0.xjbl6qt.mongodb.net/blog?appName=Cluster0"

).then(()=>app.listen(5000)).then(()=>console.log("connected To Database and listening To Localhost 5000")).catch((err)=>console.log(err)
)
;

// c2nuxKffQwdMwG3D