function Button(){
    let num=2
    function Clickedd (){
        if(num%2==0){
            alert("even")
        }else{
            alert("odd")
        }
    }
    return(
        <div>
            <button onClick={Clickedd}>clickkk</button>
        </div>
    )
}

export default Button;