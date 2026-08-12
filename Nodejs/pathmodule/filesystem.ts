import * as fs from "fs"
fs.writeFile('./helloo.txt','This is a file',(err)=>{
    if(err){
        return console.log(err);
        
    }else{
        console.log("created");
        
    }
    fs.readFile('./helloo.txt','utf8',(readErr,fileContent)=>{
        if(readErr) throw readErr
        console.log(fileContent);

        fs.appendFile('./hello.txt','and filename is hello.txt',(appErr)=>{
            if(appErr)throw appErr
            fs.readFile('./hello.txt','utf8',(readafterappendErr,updatedContent)=>{
                if(readafterappendErr) throw readafterappendErr
                else console.log(updatedContent);              
            })
            fs.rename('./hello.txt','./file5.txt',(renamerr)=>{
                if(renamerr)throw renamerr

                fs.unlink('./file5.txt',(delerr)=>{
                    if(delerr) throw delerr
                    console.log("File deleted");
                    
                })
            })
        })
        
    })
})