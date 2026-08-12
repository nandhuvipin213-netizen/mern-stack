"use strict";
function greet(name) {
    return `${name}`;
}
console.log(greet("anu"));
function message(message) {
    console.log(message);
}
message("hii");
function greeter(name, age) {
    if (age) {
        return `${name} is ${age} years`;
    }
    return `${name}`;
}
console.log(greeter("ann", 34));
function even(num) {
    if (num % 2 == 0) {
        return `num is even number`;
    }
    return `num is odd`;
}
console.log(even(7));
function factroial(num) {
    let value = 1;
    let i;
    for (i = 1; i <= num; i++) {
        value *= i;
    }
    return value;
}
console.log(factroial(9));
function person(name = "guest") {
    return `${name}`;
}
console.log(person("alice"));
const add = (a, b) => {
    return a + b;
};
console.log(add(6, 9));
function sum(...number) {
    return number.reduce((total, sum) => total + sum, 0);
}
console.log(sum(6, 9, 7, 5));
function combine(a, b) {
    return a + b;
}
console.log(combine(2, 6));
console.log(combine("a", "b"));
