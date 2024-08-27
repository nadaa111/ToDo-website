///////////////////////////////Menna///////////////////////////////////////
now = new Date();
function updateDateTime() {
  dateTimeElement = document.getElementById("datetime"); 
  options = {
      weekday:'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
  };
  date = now.toLocaleDateString('en-GB', options).replace(",", " ");
  time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' , second: '2-digit' });
  
  dateTimeElement.textContent = `${date} | ${time}`;
}

// Update the date and time immediately when the page loads
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);

///////////////////////////////Nada///////////////////////////////////////

// Displaying the logged in user's name
window.onload = function displayName() {
  var fullname = localStorage.getItem("name"); 
  document.getElementById('userName').innerText = fullname; 
};

var taskName = document.getElementById("taskName");
var tasksList = document.getElementById("tasksList");
var taskTime = document.getElementById("taskTime");
var arrays = [];

// Adding task information in the container 
function addTask() {
    // Checking if the task name is empty
  let taskTitle = taskName.value.trim(); 
  if (taskTitle === "") {
    alert("Task name cannot be empty!");
    return; 
  }
  let list = {
    title: taskName.value,
    dueDate:now.toLocaleDateString()
  };
  arrays.push(list);
  displayTask();
  taskName.value="";
}


// The structure if the container 
function displayTask() {
  var container = ''; 
  for (let i = 0; i < arrays.length; i++) {
    container += 
     // Salah
    `
    <div class="task" id="task${i}">
        <div class="taskDetails">
            <div>
                <p id="lTaskName${i}">${arrays[i].title}</p>
            </div>
            <div>
                <p id="taskTime${i}">${arrays[i].dueDate}</p>
            </div>
        </div>
        <div class="taskStatus">
            <button type="button" class="statusButton completeTaskButton" id="completeTaskButton${i}" onclick="completeButton(${i})">Complete Task</button>
            <button type="button" class="statusButton resumeTaskButton" id="resumeTaskButton${i}" onclick="resumeButton(${i})" style="display:none;">Resume task</button>
            <button type="button" class="statusButton deleteTaskButton" id="deleteTaskButton${i}" onclick="deleteButton(${i})">Delete task</button>
        </div>
    </div>`;
    //End of Salah
  }
  tasksList.innerHTML = container;
}

// After clicking on the plus button , the container will be displayed with it's content
document.getElementById("plusButton").addEventListener("click", function(event) {
  event.preventDefault();
  addTask();
});


///////////////////////////////Salah///////////////////////////////////////

function completeButton(index) {
  var completeTaskButton = document.getElementById("completeTaskButton" + index);
  var resumeTaskButton = document.getElementById("resumeTaskButton" + index);
  var taskTime = document.getElementById("taskTime" + index);
  var lTaskName = document.getElementById("lTaskName" + index);

  completeTaskButton.style.display = "none";
  resumeTaskButton.style.display = "block";
  taskTime.style.display = "none"; 
  lTaskName.style.textDecoration = "line-through"; 
}

function resumeButton(index) {
  var completeTaskButton = document.getElementById("completeTaskButton" + index);
  var resumeTaskButton = document.getElementById("resumeTaskButton" + index);
  var taskTime = document.getElementById("taskTime" + index);
  var lTaskName = document.getElementById("lTaskName" + index);
  console.log(index)
  completeTaskButton.style.display = "block";
  resumeTaskButton.style.display = "none";
  taskTime.style.display = "block"; 
  lTaskName.style.textDecoration = "none"; 
}


function deleteButton(index) {
  var task = document.getElementById("task" + index);
  if (task) {  
    task.remove();
    arrays.splice(index, 1); // Remove the task from the arrays list
    displayTask();
  }
 
}




document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      document.body.classList.add(savedTheme);
  }
});