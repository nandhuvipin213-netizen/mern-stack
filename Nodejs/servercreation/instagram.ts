import * as http from "http"

const server=http.createServer((req,res)=>{
    if(req.url){
        res.writeHead(202,{'content-type':'text/plain'})
    }
})