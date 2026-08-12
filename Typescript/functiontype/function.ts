export{}

function greet(name:string):string{
    return`${name}`;
}
console.log(greet("anu"));

function message(message:string):void{
    console.log(message);
    
}
message("hii")

function greeter(name:string,age?:number):string{
    if(age){
        return`${name} is ${age} years`
    }
    return`${name}`
}
console.log(greeter("ann",34));

function even(num:number):string{
    if(num%2==0){
        return`num is even number`

    }
    return`num is odd`
}
console.log(even(7));

function factroial(num:number):number{
    let value=1
    let i
    for(i=1;i<=num;i++){
        value*=i
    
    }
    return value
}
console.log(factroial(9));


function person(name:string ="guest"):string{
    return`${name}`
}
console.log(person("alice"));

const add=(a:number,b:number):number=>{
    return a+b
}
console.log(add(6,9));


function sum(...number:number[]):number{
    return number.reduce((total,sum)=>total+sum,0)
}
console.log(sum(6,9,7,5));

function combine(a:number,b:number):number;
function combine(a:String,b:string):string
function combine(a:any, b:any):any{
    return a+b
}
console.log(combine(2,6));
console.log(combine("a" , "b"));









