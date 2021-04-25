let counter = 0;

function addTask() {
    let taskContainer = document.getElementById("taskContainerID");
    let taskText = document.getElementById("taskTextID");

    if (taskText.value != "") {
        taskContainer.innerHTML += "<div class='shadow-md p-2 border --task' id=" 
        + "task" + counter + ">" 
        + taskText.value + "<button class='deleteButton' onclick='showIt(this)'>Delete</button></div>";
        counter++;
        taskText.value = null;
    } else {
        alert("Please enter a task")
    }
}

// function deleteTask() {
//     let taskIndex = showIt(docu)
// }

function showIt(element) {
    let parent = element.parentNode;
    let taskToDelete = document.getElementById(parent.id)
    taskToDelete.parentNode.removeChild(taskToDelete)
    // alert(parent.id);
    // alert(content.id);
    console.log(parent.id)
  }