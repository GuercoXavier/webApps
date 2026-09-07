
//user inputs - in == input
// let in_id = 1;
// let in_name = "NULL";
// let in_description = "NULL";


// task object
// const task = {
//     task_id: in_id,
//     task_name: in_name,
//     task_description: in_description
// };

//DEBUG
// console.log(task.task_name.value);

// DOM Elements
//containers
// this is where i'll append all the tasks
const tasks_container = document.getElementById("allTasks");
// this is just all the tasks (i don't think i'll need this)
const task_list = document.getElementsByClassName("task");

// buttons
const add_btn = document.getElementById("addTarefa");
const remove_btn = document.getElementById("removerTarefa");
const recover_btn = document.getElementById("recuperarTarefa");

// Array to load data
let tasks = [];
// tasks.push(localStorage.getItem());
let backup_arr = [];

// ---------- BUTTONS
add_btn.addEventListener("click", function () {
    let in_name = document.getElementById("nameField");
    let in_description = document.getElementById("descField");

    if (in_name.value !== "") {
        createTask(in_name, in_description);
        in_name.value = "";
        in_description.value = "";
    } else {
        alert("Tarefa Invalida!!! INSIRA Nome Por Favor!")
        return;
    }
});

remove_btn.addEventListener("click", function () {
    let in_name = document.getElementById("nameField");

    if (tasks.length !== 0) {
        removeTask(in_name);

    } else {
        alert("SEM TAREFAS PARA REMOVER!!!");
        in_name.value = "";
    }
});

recover_btn.addEventListener("click", function () {
    recoverTask();
});


// --------- FUNCTIONS
function createTask(name, desc) {
    let id = + 1;

    const task = new Task(id, name.value, desc.value);

    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("task");

    const nameParagraph = document.createElement("p");
    nameParagraph.id = "name";

    const descParagraph = document.createElement("p"); // description
    descParagraph.id = "description";

    nameParagraph.innerText = `${task.getName()}`;
    descParagraph.innerText = `${task.getDescription()}`;

    newTaskContainer.appendChild(nameParagraph);
    newTaskContainer.appendChild(descParagraph);

    tasks_container.appendChild(newTaskContainer);

    tasks.push(task);
    saveTask();

    showTasks();
}

function removeTask(inName) {
    // alerts don't stop the execution of a block of code
    // but here it doesn't really matter since if it is empty (tasks.length === 0)
    // it will "skip" the loop and clear the name field on the screen and print the list
    // if (tasks.length === 0) alert("SEM TAREFAS PARA REMOVER!!!");
    let found = false;

    for (let i = 0; i < tasks.length; i++) {
        // console.log(tasks[i].name); // DEBUG LINE

        // const parsedTask = Task.parse(tasks[i]);
        if (tasks[i].name === inName.value) {
            found = true;
            // console.log(tasks[i].name + " deleted");

            // splice basically acts like 'cut'
            backup();
            // backup_arr = tasks;
            tasks.splice(i, 1);
            // console.log("a bit before deletion");
            // showTasks();
            // backup();
            saveTask();
            console.log(inName.value + " deleted");
        }
    }
    if (!found) alert("NOT FOUND!!!");

    inName.value = "";
    // console.log("Aquiiii")// DEBUG line
    showTasks();
}

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTask() {
    const dados = localStorage.getItem("tasks");

    if (dados) tasks = JSON.parse(dados);

}

function showTasks() {
    loadTask();
    console.log(tasks);
}

function backup() {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadBackup() {
    const dados = sessionStorage.getItem("tasks");

    if (dados) tasks = JSON.parse(dados);
}

function recoverTask() {
    // localStorage.
    loadBackup();

    saveTask();
    showTasks();
}

// ####### ENTRY POINT (fake main)

showTasks();



// ######## CLASS TASK #######

class Task {

    constructor(id, name, description) {
        this.id = id++;
        this.name = name;
        this.description = description;
    }

    // Getters and Setters
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

}
