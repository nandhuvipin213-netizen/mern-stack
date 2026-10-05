import { useState } from "react"

function Todo(){
    const[text,setTask]=useState<string>("")
    const[add,setTodo]=useState<string[]>([])
    function addTodo(e:any){
        e.preventDefault()
        setTodo([...add,text])
        setTask("")
    }
    function deleteText(){
        
    }

    return(
        <div>
            <form onSubmit={addTodo}>
                <input type="text" onChange={(e)=>setTask(e.target.value)}/>
                <button type="submit">submit</button>
            </form>

            <ul>
                 {add.map((todo,index)=>
                <li key={index}>{todo}
                <button onClick={deleteText}>Delete</button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Todo