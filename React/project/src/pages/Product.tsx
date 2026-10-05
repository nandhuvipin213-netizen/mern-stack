type productpop={
    pro:string[]
}

function Product(props:productpop){
    return(
        <div>
            {props.pro.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </div>
    )
}
export default Product