import { useState } from "react"

function Colorchange(){

    const [clr,setColor]=useState("red");
    function colorChange(){
        setColor("blue")
    }
    return(
        <div>
            <h2 style={{color:clr}}>Welcome</h2>
            <button onClick={colorChange}>chh</button>
        </div>
    )
}

export default Colorchange;