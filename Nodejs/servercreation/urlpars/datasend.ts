import * as http from 'http'

const server=http.createServer((req,res)=>{
    if(req.method=== "POST" && req.url ==="/message"){
        let body=""

        req.on("data",(data)=>{
            body+=data
        })
        req.on("end",()=>{
            if(!body){
                res.writeHead(400,{
                    "content-type":"application/json"
                })
                res.end(JSON.stringify({
                    success:false,
                    message:"Request bodyu is empty"
                }))
                return
            }
            try{
                const message=JSON.parse(body)
                res.writeHead(201,{
                    "content-type":"application/json"
                })
                res.end(JSON.stringify({
                    success:true,
                    message:"message sent successfully",
                    data:message
                }))
            }catch(error){
                res.writeHead(400,{
                    "content-type":"application/json"
                })
                res.end(JSON.stringify({
                    success:false,
                    message:"invalid JSON format"
                }))
            }
        })
    }
    else if(req.method=== "GET" && req.url==="/message"){
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.end(JSON.stringify({
            message:"Display all messsage"
        }))
    }
    else{
        res.writeHead(404,{
            "content-type":"application/json"
        })
        res.end(JSON.stringify({
            message:"route not found"
        }))
    }
})
const port=7000
server.listen(port,()=>{
    console.log(`server listening on port${port}`);
    
})
