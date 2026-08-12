"use strict";
let skill = [];
skill[0] = "hi";
skill[1] = "hloo";
skill.push("welcome");
console.log(skill);
let fruits = [10, 20];
let score1 = [10, "two", 2];
let score2;
score2 = ["num", 2];
//tuple
let anu = ["k", 9];
console.log(anu);
//invalid tuple
let student = ["li", 12, true];
console.log(student);
//access tuple element
let person = ["helo", 2];
console.log(person[0]);
console.log(person[1]);
//updating tuple
person[0] = "hi";
person[1] = 20;
console.log(person);
//optional tuple
let user;
user = ["anvi"];
console.log(user);
user = ["bob", 13];
console.log(user);
// readonly
let point = [10, 20];
console.log(point);
// enum
var cash;
(function (cash) {
    cash[cash["balance"] = 0] = "balance";
    cash[cash["current"] = 1] = "current";
})(cash || (cash = {}));
console.log(cash.current);
