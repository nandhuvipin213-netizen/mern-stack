console.log("&&", true&&true);
console.log("&&", true&&false);
console.log("||", true||true);
console.log("||", true||false);
console.log("||", false||false);
console.log("!", true!=false);


let age=15
let hadid=true

console.log(age<=10&&hadid);
console.log(age<=10||hadid);
console.log(age<=10!=hadid);

// incriment

let m=5

console.log("++m",++m);
console.log("m++",m++);
console.log("m++", m++);
console.log("m--",m--);
console.log("m--",m--);



let user=null
let name=user ??"guest";
console.log(name);
let score=0;
console.log(score || 10);
console.log(score ?? 0);
