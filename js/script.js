function addtask() {
  let taskInfo = {};
  taskInfo.taskName = document.getElementById("taskName").value;
  taskInfo.taskDesxription = document.getElementById("taskDesc").value;
  taskInfo.taskAssignee = document.getElementById("taskAssign").value;

  let taskBox = document.createElement("div");
  let status = document.getElementById("statuslist").value;

  if (status === "todo") {
    document.getElementById("todoMember").appendChild(taskBox);
    taskBox.className = "newTodo";
  } else if (status === "inprogress") {
    document.getElementById("inprogressMember").appendChild(taskBox);
    taskBox.className = "newInprogress";
  } else if (status === "testing") {
    document.getElementById("testingMember").appendChild(taskBox);
    taskBox.className = "newTesting";
  } else {
    document.getElementById("doneMember").appendChild(taskBox);
    taskBox.className = "newDone";
  }

  let taskTitle = document.createElement("h2");
  taskTitle.innerHTML = taskInfo.taskName;

  let taskDescription = document.createElement("p");
  taskDescription.innerHTML = taskInfo.taskDesxription;

  let taskAssignee = document.createElement("p");
  taskAssignee.innerHTML = taskInfo.taskAssignee;

  let taskStatus = document.createElement("p");
  taskStatus.classList.add("hide");
  taskStatus.innerHTML = status;

  let editButton = document.createElement("img");
  editButton.src = "images/edit-icon.png";
  editButton.className = "RecycleBin";
  editButton.addEventListener("click", function (e) {
    edit(e);
  });

  let deleteButton = document.createElement("img");
  deleteButton.src = "images/delete.png";
  deleteButton.className = "RecycleBin";
  deleteButton.addEventListener("click", function () {
    taskBox.remove();
  });

  taskBox.appendChild(taskTitle);
  taskBox.appendChild(taskDescription);
  taskBox.appendChild(taskAssignee);
  taskBox.appendChild(taskStatus);
  taskBox.appendChild(editButton);
  taskBox.appendChild(deleteButton);
  nullAllInput();
}

function edit(e) {
  let inedit = document.getElementById("inedit");
  if (inedit === null) {
    let status = e.target.previousElementSibling;
    let asinge = status.previousElementSibling;
    let desc = asinge.previousElementSibling;
    let name = desc.previousElementSibling;
    e.target.parentElement.id = "inedit";

    document.getElementById("taskName").value = name.innerHTML;
    document.getElementById("taskDesc").value = desc.innerHTML;
    document.getElementById("taskAssign").value = asinge.innerHTML;
    document.getElementById("statuslist").value = status.innerHTML;
    document.getElementById("editTask").classList.remove("hide");
    document.getElementById("addTask").classList.add("hide");
  } else {
    alert("jer daasrulet aktiuri editi");
  }
}

const obj = {
  todo: "todoMember",
  inprogress: "inprogressMember",
  testing: "testingMember",
  done: "doneMember",
};

function editTask() {
  let inedit = document.getElementById("inedit").childNodes;
  inedit[0].innerHTML = document.getElementById("taskName").value;
  inedit[1].innerHTML = document.getElementById("taskDesc").value;
  inedit[2].innerHTML = document.getElementById("taskAssign").value;
  let oldStatus = inedit[3].innerHTML;
  let newStatus = document.getElementById("statuslist").value;
  if (oldStatus !== newStatus) {
    document.getElementById("inedit").className =
      "new" + newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    document
      .getElementById(obj[newStatus])
      .appendChild(document.getElementById("inedit"));
  }
  inedit[3].innerHTML = newStatus;
  document.getElementById("editTask").classList.add("hide");
  document.getElementById("addTask").classList.remove("hide");
  document.getElementById("inedit").id = null;
  nullAllInput();
}

function nullAllInput() {
  document.getElementById("taskName").value = "";
  document.getElementById("taskDesc").value = "";
  document.getElementById("taskAssign").value = "";
  document.getElementById("statuslist").value = "todo";
}
