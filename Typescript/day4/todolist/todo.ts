let todo: string[] = []

let editindex: number = -1

function handleAdd(): void {
    let input = document.getElementById("input") as HTMLInputElement
    let btn = document.getElementById("btn") as HTMLButtonElement

    const task: string = input.value.trim();
    if (task !== "") {
        if (editindex == -1) {
            todo.push(task)
        } else {
            todo[editindex] = task
            editindex = -1
            btn.innerHTML = "Add Task"
        }
        input.value = ""
        displayTask()
    }
}

//function display
function displayTask(): void {
    const list = document.getElementById("list") as HTMLUListElement

    let output: string = ""

    todo.forEach((task: String, index: number) => {
        output += `
        <li>
           ${task}
           <button  onclick="handleEdite(${index})">Edite</button>
           <button  onclick="handleDelete(${index})">Delete</button>
        </li>`
    })
    list.innerHTML = output

}

// function delete
function handleDelete(index: number): void {
    todo.splice(index, 1)
    displayTask()
}
//function edite

function handleEdite(index: number): void {
    editindex = index
    const input = document.getElementById("input") as HTMLInputElement
    const btn = document.getElementById("btn") as HTMLButtonElement

    input.value = todo[index]
    btn.innerText = "Update Task"
}
