import { useState } from "react";

function Counter(){
    const [increase,setCount]=useState(0);
    function add(){
        setCount(increase +1)
    }
    function less(){
        setCount(increase-1)
    }
    function reset(){
        setCount(0)
    }

    return(
        <div>
            <h1>{increase}</h1>
            <button onClick={add}>cl</button>
            <button onClick={less}>cl</button>
            <button onClick={reset}>cl</button>
        </div>
    )
}

export default Counter;