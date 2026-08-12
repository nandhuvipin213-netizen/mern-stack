function getstring(value) {
    return value;
}
function getnumber(value) {
    return value;
}
function getboolean(value) {
    return value;
}
function identity(value) {
    return value;
}
console.log(identity("hlooo"));
console.log(identity(20));
function multiple(name, age) {
    console.log(name, age);
}
multiple("anu", 30);
function swap(name, age) {
    return [age, name];
}
console.log(swap(20, "anvi"));
export {};
