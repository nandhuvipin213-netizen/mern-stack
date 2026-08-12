// export{}
// let butoon=document.getElementById("btn")
// if(butoon){
//     butoon.addEventListener("click",()=>{
//         console.log("clicked");
        
//     })
// }

const btn1=document.getElementById("btn") as HTMLButtonElement
btn1.addEventListener("click",()=>{
    console.log("clicked");
    
})

const btn2=document.getElementById("btn")!
btn2.addEventListener("click",()=>{
    console.log("clicked");
    
})

const put=document.getElementById("put") as HTMLInputElement
console.log(put.value);



