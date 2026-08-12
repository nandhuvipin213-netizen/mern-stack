export{}

//type annotation

let a:string="helloo"
console.log(a);

let person:[string,Number]=["sanu",10]
console.log(person);

let data:any=10
data="hloo"
console.log(data);

let value: unknown = "hii";

if (typeof value === "string") {
    value = value.toUpperCase();
}

console.log(value);

let isLoggedin:boolean=true
console.log(isLoggedin);

//type inference

// let score=87
// let title="welcome"
// score = "high"


let score:Number[]=[80,25]
let name:string[]=["anu","divys"]
console.log(score,name);

let ids:Array<number>=[12,32]
console.log(ids);

let mixed:(string|number)[]=[12,"div"]
console.log(mixed);













