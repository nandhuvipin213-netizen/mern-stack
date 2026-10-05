import { useState } from "react"

function Toggle(){

    const [shows,setShow]=useState(true);
    function show(){
        setShow(!shows)
    }

    return(
        <div>
            <button onClick={show}>Toggle</button>
            {
                shows &&<h1>helloooo</h1>
            }
        </div>
    )
}

export default Toggle