import Sidebar from "./Sidebar"

type dashh={
    user:string
}

function Dasboard(props:dashh){
    return(
        <div>
            <Sidebar users={props.user}></Sidebar>
        </div>
    )
}
export default Dasboard