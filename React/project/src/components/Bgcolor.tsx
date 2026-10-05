import { useState } from "react"

function Bgcolor(){
    const[dark,setDark]=useState(false);
    function change(){
        setDark(!dark)
    }
    return(
        <div style={{backgroundColor:dark ?"white":"black"}}>
            <button onClick={change}>change</button>
        </div>
    )
}

export default Bgcolor;