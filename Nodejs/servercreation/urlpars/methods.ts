import * as http from "http"
import { url } from "inspector"

const server=http.createServer((req,res)=>{


    if(req.method=== "GET" && req.url==="/student"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("displaying all students")
    }
    else if(req.method=== "POST" && req.url==="/student"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("student add successfull")
    }
    else if(req.method=== "PUT" && req.url==="/student"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("student update successfyull")
    }
    else if(req.method=== "DELETE" && req.url==="/student"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("student delete successfull")
    }
    else if(req.method=== "PATCH" && req.url==="/student"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("student partially update")
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("route not found")
    }
})
const port=7000
server.listen(port,()=>{
    console.log(`server listening port ${port}`);
    
})