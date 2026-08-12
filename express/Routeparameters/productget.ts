import express, {type Application } from "express"

const app:Application= express()
 app.use(express.json())

type products={id:number,name:string,price:number}

const product:products[]=[
    {
        id:1,
        name:"Lap",
        price:20000

    },
    {
        id:2,
        name:"mobile",
        price:50000
    }
]

app.get("/product",(req,res)=>{
    res.json({"message":"all products",product})
})
app.get("/product/:id",(req,res)=>{
    let id=Number(req.params.id)
    const productss=product.find(aa => aa.id===id)
    if(!productss){
        return res.status(404).json({
            message:"product not found"
        })
    }
    res.json(productss)
})

app.post("/new",(req,res)=>{
    const newprodut={
        id:product.length+1,
        name:req.body.name,
        price:req.body.price
    }
    product.push(newprodut)
    res.status(202).json({
        message:"product added",product:newprodut
    
    })
})

app.put("/products/:id",(req,res)=>{
    const id =Number(req.params.id)

    const index=product.findIndex(p => p.id===id)
    if(index ==-1){
        return res.status(202).json({
            message:"product not"
        })
    }
    product[index]={
        id:id,
        name:req.body.name,
        price:req.body.price
    }
    res.status(202).json({
        message:"product updated",product:product[index]
    })
})



app.patch("/product/:id",(req,res)=>{
    const id =Number(req.params.id)
    const products=product.find(t =>t.id===id)

    if(!products){
       return res.status(404).json({message:"product not found"})
    }
    if(req.body.name){
        products.name= req.body.name
    }
    if(req.body.price){
        products.price=req.body.price
    }

    res.json(product)
})

app.delete("/product/:id",(req,res)=>{
     const id =Number(req.params.id)

    const index=product.findIndex(p => p.id===id)
    if(index ==-1){
        return res.status(202).json({
            message:"product not"
        })
    }
    product.splice(index,1)
    res.status(202).json({messsage:"product deleted"})

})

let port:number=7000
app.listen(port,()=>{
    console.log(`server listen ${port}`)
})