let counter = 0;

function addTask() {
    let taskContainer = document.getElementById("taskContainerID");
    let taskText = document.getElementById("taskTextID");

    if (taskText.value != "") {
        taskContainer.innerHTML += "<div class='shadow-md p-2 border --task' id="
            + "task" + counter + ">"
            + taskText.value + "<button class='deleteButton' onclick='deleteTask(this)'>Delete</button></div>";
        counter++;
        taskText.value = null;
    } else {
        alert("Please enter a task")
    }
}

function deleteTask(element) {
    let parent = element.parentNode;
    let taskToDelete = document.getElementById(parent.id)
    taskToDelete.parentNode.removeChild(taskToDelete)
    console.log(parent.id)
}

$(document).ready(function () {
    $('#taskTextID').keypress(function (e) {
        if (e.keyCode == 13)
            $('#buttonAddID').click();
    });
});

function refreshTime() {
    let timeDisplay = document.getElementById("time");
    let dateString = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    let formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
    setInterval(refreshTime, 1000);
}
