export{}

function getstring(value:string):string{
    return value;
}
function getnumber(value:number):number{
    return value
}
function getboolean(value:boolean):boolean{
    return value
}

function identity<T>(value:T):T{
    return value
}
console.log(identity<string>("hlooo"));
console.log(identity<number>(20));

function multiple<v,T>(name:v ,age:T):void{
    console.log(name,age);
    
}
multiple< string,number >("anu",30)

function swap<T,v>(name:T,age:v):[v,T]{
    return[age,name]
}
console.log(swap(20,"anvi"));

interface box<T>{
    value:T
}
const box1:box<string>={
    value:"helo"
}
const box2:box<number>={
    value:20
}




