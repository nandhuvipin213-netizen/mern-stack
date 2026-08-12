export{}

let skill:string[]=[]
skill[0]="hi"
skill[1]="hloo"
skill.push("welcome")
console.log(skill)

let fruits=[10,20]

let score1=[10,"two",2]
let score2:(string|Number)[]
score2=["num",2]


//tuple
let anu:[string,Number]=["k",9]
console.log(anu);


//invalid tuple
let student:[string,Number,boolean]=["li",12,true]
console.log(student);

//access tuple element

let person:[string,number]=["helo",2]
console.log(person[0]);
console.log(person[1]);

//updating tuple
person[0]="hi"
person[1]=20
console.log(person);

//optional tuple

let user:[string,number?]
user=["anvi"]
console.log(user);
user=["bob",13]
console.log(user);

// readonly

let point:readonly[number,number]=[10,20]
console.log(point);

// enum

enum cash{
    balance=0,
    current=1
}
console.log(cash.current);
console.log(cash.balance);








