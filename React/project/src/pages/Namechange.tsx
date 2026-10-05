import { useState } from "react"

function Namechange(){
    const [changes,setName]=useState("livil")
    let change=()=>{
        setName("jishnu")

    }
    return(
        <div>
            <h2>{changes}</h2>
            <button onClick={change}>change</button>
        </div>
    )
}

export default Namechange;