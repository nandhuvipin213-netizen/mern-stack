"use strict";
let todo = [];
let editindex = -1;
function handleAdd() {
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");
    const task = input.value.trim();
    if (task !== "") {
        if (editindex == -1) {
            todo.push(task);
        }
        else {
            todo[editindex] = task;
            editindex = -1;
            btn.innerHTML = "Add Task";
        }
        input.value = "";
        displayTask();
    }
}
//function display
function displayTask() {
    const list = document.getElementById("list");
    let output = "";
    todo.forEach((task, index) => {
        output += `
        <li>
           ${task}
           <button  onclick="handleEdite(${index})">Edite</button>
           <button  onclick="handleDelete(${index})">Delete</button>
        </li>`;
    });
    list.innerHTML = output;
}
// function delete
function handleDelete(index) {
    todo.splice(index, 1);
    displayTask();
}
//function edite
function handleEdite(index) {
    editindex = index;
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    input.value = todo[index];
    btn.innerText = "Update Task";
}
