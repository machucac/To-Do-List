const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");
const taskCount = document.getElementById("taskCount");

let count = 0;

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
function updateTaskCount() {
    const totalTasks = taskList.querySelectorAll("li").length;
    const completedTasks = taskList.querySelectorAll("li.completed").length;
    const remainingTasks = totalTasks - completedTasks;
    
    taskCount.textContent = `Tasks: ${totalTasks} | Completed: ${completedTasks} | Remaining: ${remainingTasks}`;
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
clearAllBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
});