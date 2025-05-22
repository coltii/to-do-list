function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Te rog introdu o sarcină!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <span class="delete-btn" onclick="this.parentElement.remove()">Șterge</span>`;
    taskList.appendChild(li);
    taskInput.value = "";
}