
import * as http from "http"

const server=http.createServer((req,res)=>{
    if(req.method=== "GET" && req.url==="/whatsapp"){
       res.writeHead(200,{"content-type":"text/plain"})
       res.end("Home page")    
    }
    else if(req.method=== "PUT" && req.url==="/whatsapp"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("status")
    }
    else if(req.method=== "POST" && req.url==="/whatsapp"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("calls")
    }
    else if(req.method=== "DELETE" && req.url==="/whatsapp"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("chat deleted")
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("route not found")
    }

})
const port=5000
server.listen(port,()=>{
    console.log(`server listening port ${port}`);
    
})

