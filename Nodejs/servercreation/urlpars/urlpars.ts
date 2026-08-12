import * as http from "http"
import * as url from "url"
import * as fs from "fs"


const server= http.createServer((req,res)=>{
    const urlparse=url.parse(req.url||"",true)

    if(urlparse.pathname=== '/greet'&& urlparse.query.address){
        const address=urlparse.query.address as string
        console.log('path',urlparse.pathname);
        console.log('address',address); 
        
        fs.readFile('greeting.html','utf8',(err,data)=>{
        if(err){
            res.writeHead(500, {'content-type':'text/plain'})
            res.end("server error")
        }
         const dynamichtml = data.replace('{{name}}',address)
         res.writeHead(500, {"content-type":"text/html"})
         res.end(dynamichtml)
    })
   
    }else{
        res.writeHead(500,{"content-types":"text/plain"})
        res.end("welcome! please provide a name in the url")

    }
    
})
const port:number=6000
server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
    
})