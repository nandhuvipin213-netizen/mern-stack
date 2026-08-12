import express,{type Application} from 'express'
import router from "./routes/autherroute.js"

const app:Application=express()

app.use(express.json())

app.use("/api",router)

const port:number=6000
app.listen(port,()=>{
    console.log(`server listen ${port}`)
})
