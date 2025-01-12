const inputField = document.getElementById("inputField");
const tasksList = document.getElementById("tasksList");

const allTaksCounter = document.getElementById("all-counter");
const completedTasksCounter = document.getElementById("completed-counter");
const pendingTasksCounter = document.getElementById("pending-counter");

function addTask() {
    const task = inputField.value.trim();
    if (!task) {
        alert("Please write down a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    // Add list item to tasks list
    tasksList.appendChild(li);

    // Clear the input field by setting its value to an empty string
    inputField.value = "";

    const checkbox = li.querySelector("input");
    const taskSpan = li.querySelector("span");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    // When the checkbox is click, mark the task as completed
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);

        updateCounter();
    });

    // Edit task when edit button is clicked
    editBtn.addEventListener("click", () => {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed")

            checkbox.checked = false;
            updateCounter();
        }
    })

    // Remove with confirmation a task when its delete button is clicked
    deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();

        updateCounter();
        }
    })

    updateCounter();
}

const updateCounter = () => {
    const completedTasks = document.querySelectorAll(".completed").length;
    const pendingTasks = document.querySelectorAll("li:not(.completed)").length;

    completedTasksCounter.textContent = completedTasks;
    pendingTasksCounter.textContent = pendingTasks;
    allTaksCounter.textContent = completedTasks + pendingTasks;
}

updateCounter();
