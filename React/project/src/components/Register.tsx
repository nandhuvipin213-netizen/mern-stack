import { useState } from "react";

function Register(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    function clll(){
        if(!name||!email||!password){
            alert("Enter content")
        }else{
            alert("Login successfull")
        }
    }
    return(
        <div>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
            <br />
            <input type="email" placeholder="Enter Your email" onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={clll}>click</button>
        </div>
    )
}

export default Register;