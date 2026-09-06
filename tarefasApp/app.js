
//user inputs - in == input
let in_id = 1;
let in_name = "NULL";
let in_description = "NULL";


// task object
const task = {
    task_id: in_id,
    task_name: in_name,
    task_description: in_description
};

//DEBUG
console.log(task.task_name.value);

// DOM Elements
//containers
// this is where i'll append all the tasks
const tasks_container = document.getElementById("allTasks");
// this is just all the tasks (i don't think i'll need this)
const task_list = document.getElementsByClassName("task");

// buttons
const add_btn = document.getElementById("addTarefa");
const remove_btn = document.getElementById("removerTarefa");
// const list_btn = document.getElementById("listarTarefa");

add_btn.addEventListener("click", function () {
    let in_name = document.getElementById("nameField");
    let in_description = document.getElementById("descField");

    task.task_name = in_name.value;
    task.task_description = in_description.value;

    in_name.value = "";
    in_description.value = "";

    // validation, only accepts new task if not NULL or empty
    if (task.task_name === "NULL" || task.task_name === "") {
        alert("Tarefa Invalida!!! INSIRA Nome Por Favor!")
        return;
    }

    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const nameParagraph = document.createElement("p");
    // nameParagraph.classList.add("name");
    nameParagraph.id = "name";
    const descParagraph = document.createElement("p"); // description
    // descParagraph.classList.add("description");
    descParagraph.id = "description";

    nameParagraph.innerText = `${task.task_name}`;
    descParagraph.innerText = `${task.task_description}`;

    newTask.appendChild(nameParagraph);
    newTask.appendChild(descParagraph);
    // newTask.classList.add("task");
    // nameParagraph.classList.add("name");
    // descParagraph.classList.add("description");

    // document.innerHTML = newTaskHTML();
    // newTask.innerHTML = newTaskHTML();
    tasks_container.appendChild(newTask);

});


//brute force the stylization
// function newTaskHTML() {
//     const newTask = `<p id="name">${task.task_name}</p>
//           <p id="description">${task.task_description}</p>`;

//     return newTask;
// }
