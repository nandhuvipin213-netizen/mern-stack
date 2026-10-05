import Profile from "./Profile"

function Sidebar(props:any){
    return(
        <div>
            <Profile use={props.users}></Profile>
        </div>
    )
}

export default Sidebar