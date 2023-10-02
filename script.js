//create Task
let taskInput = document.getElementById("taskinput");
let addTask = document.getElementById("addtask");

//declared a variable called dataTasks
let dataTasks;

//validation if there any data previously saved is it's true
//then we push data from localstorage to array dataTasks
if (localStorage.task != null) {
  dataTasks = JSON.parse(localStorage.task);
} else {
  //if it's false we make an empty array
  dataTasks = [];
}
//if we clicked in the button addTask the function well execute
addTask.onclick = function () {
  if (taskInput.value.length == 0) {
    alert("please Enter a Task");
  } else {
    //create an object stored data from inpput value
    let newTask = {
      txt: taskInput.value,
      completed: false,
    };

    //save object to array dataTasks
    dataTasks.push(newTask);

    //save data to localStorage
    localStorage.setItem("task", JSON.stringify(dataTasks));

    //clear inputs
    clearData();

    //show data
    showData();

  }
};

  //show data from localStorage
  function showData() {
    let tasks = "";
    for (let i = 0; i < dataTasks.length; i++) {
      tasks += `
                      <div id="task">
                          <span id="taskcontent">${dataTasks[i].txt}</span>
                          <button class="deletetask" onclick="deleteTasks(${i})"><i class="fa-regular fa-trash-can"></i></button>
                      </div>`;

      let divTasks = document.getElementById("divtasks");
      divTasks.innerHTML = tasks;
      divTasks.style.display = "block"
    }
  }

//show data
showData();

//delete Tasks
function deleteTasks(i) {
  dataTasks.splice(i,1);
  localStorage.task = JSON.stringify(dataTasks);
  console.log(i)
  showData();
  location.reload()
}


//clear inputs
function clearData() {
  taskInput.value = "";
}
