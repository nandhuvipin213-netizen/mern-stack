import * as http from "http"
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("hello worlhgggggd")
})
const port:number=9000
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})