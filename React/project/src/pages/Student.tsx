import React from "react";

function Student(){

    type student={
        name:string,
        age:number,
        rollno:number
    }
     let Students:student={
                name:"anu",
                age:20,
                rollno:10
            }
    return(
        <div>
           <h1>{Students.name}</h1>
           <h2>{Students.age}</h2>
           <h3>{Students.rollno}</h3>
        </div>
    )
}
export default Student