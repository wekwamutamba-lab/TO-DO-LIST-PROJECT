const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    let task = taskInput.value;

    let li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";
});