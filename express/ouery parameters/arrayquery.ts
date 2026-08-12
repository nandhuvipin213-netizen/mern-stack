import express, { type Application } from "express"

const app:Application=express()

const product=[
    {id:1,name:"hp",catagory:"lap",price:30000},
    {id:2,name:"lenovo",catagory:"lap",price:4000},
    {id:3,name:"redmi",catagory:"mobile",price:9000},
    {id:4,name:"samsung",catagory:"mobile",price:7000},    
]

app.get("/product",(req,res)=>{

    let {catagory,minprice,maxprice}=req.query
    let result=product
    if(catagory){
        result=result.filter(v =>v.catagory=== String (catagory) )
    }
    if(minprice){
        result=result.filter(v=>v.price >= Number(minprice))
    }
    if(maxprice){
        result=result.filter(v=>v.price <= Number(maxprice))
    }
    res.json(result)
})
let port=6000
app.listen(port,()=>{
    console.log(`server listen ${port}`);
    
})

