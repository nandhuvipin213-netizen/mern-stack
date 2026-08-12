import * as http from "http"

const server=http.createServer((req,res)=>{
    if(req.method=== "POST" && req.url==="/flipcart"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Welcome flipcart")
    }
    else if(req.method=== "GET" && req.url==="/cart"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("product add cart")
    }
    else if(req.method=== "PUT" && req.url==="/review"){
         res.writeHead(200,{"content-type":"text/plain"})
        res.end("reviews")
    }
    else if(req.method=== "DELETE" && req.url==="/remove"){
         res.writeHead(200,{"content-type":"text/plain"})
        res.end("remove from cart")
    }
    else if(req.method=== "GET" && req.url==="/"){}
    else{
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("route not found")
    }
       

       
})