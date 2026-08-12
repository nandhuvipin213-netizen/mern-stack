export{}

let value:any="abcd"
let message= value as string
console.log(message.length);

let values:any="welcome"
let text=<string>values
console.log(text.toUpperCase());

let data:any=[20, 40,10]
let numbers=data as number[];
console.log(numbers[2]);

//obect

interface student{
    name:string
    age:number
}
let data1:any={
    name:"anu",
    age:10
}
let student=data1 as student
console.log(student.age);

let and:any= 2
let num=and as number
console.log(num);

let valu:any=true
let va=valu as boolean
console.log(va);

interface employ{
    name:string
    id:number
}
let deteail={
    name:"anuu",
    id:2301010
}
let details=deteail as employ
console.log(details);

let arr:any=["and"]
let array=arr as string[]
console.log(array);





