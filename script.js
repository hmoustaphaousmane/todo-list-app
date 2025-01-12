const inputField = document.getElementById("inputField");
const tasksList = document.getElementById("tasksList");

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
}