function Condition(){
    let logedin=true
    return(
        <div>
            {logedin?"welcome":"pleace login"}
            </div>
    )
}

export default Condition;