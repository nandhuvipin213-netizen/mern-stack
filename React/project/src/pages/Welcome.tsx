type pop={
    name:string,
    age:number
}


function Welcome(props:pop){
    return(
        <div>
            {props.name}
            {props.age}
        </div>
    )
}

export default Welcome