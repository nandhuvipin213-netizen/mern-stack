import { useState } from "react";

function Passcheck(){

    const [password,setPassword]=useState("")
    const [strength,setStrength]=useState("")

    function  checkPassword(value:any){
        setPassword(value)
        if(value.length <4){
            setStrength("Weak")
        }
        else if(value.length <8){
            setStrength("Medium")
        }
        else{
            setStrength("strong")
        }
    }
    return(
        <div>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>checkPassword(e.target.value)}/>
            <h2>Password strength:{strength}</h2>
        </div>
    )
}

export default Passcheck;