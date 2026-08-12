import express, { type Application } from "express"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const secretkey='@abc'
const app:Application=express()

type datas={name:string,email:string,password:string}

app.use(express.json())


const data:datas[]=[]

app.post("/register",async(req,res)=>{
    const{name,email,password}=req.body
    if(!name||!email||!password){
        return res.status(202).json({message:"all details filled"})
    }
    const existinguser=data.find(f =>f.email===email)
    if(existinguser){
        res.status(404).json({message:"email already existing"})
    }
    const hashedpassword=await bcrypt.hash(password,10)
    const newuser:datas={
        name,
        email,
        password:hashedpassword
    }
    data.push(newuser)
    res.status(202).json({message:"login successfull"})
})




app.post("/log",async(req,res)=>{
    const {email,password}=req.body
    const one=data.find(h => h.email===email )
    if(!one){
        return res.status(202).json({message:"email not found"})
    }
    const match=await bcrypt.compare(password,one.password)
    if(!match){
        return res.status(404).json({message:"password invalid"})
    }
    const token=jwt.sign({name:one.name,email:one.email},secretkey)
    res.json({message:"login successfull",token})


})

app.get("/full",(req,res)=>{
    res.json({message:"success",data})
})




const port=6000
app.listen(port,()=>{
    console.log(`server listen ${port}`)
})