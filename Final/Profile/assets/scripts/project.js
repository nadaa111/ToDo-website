// -------------------------------Menna ------------------------------------------------------
function updateDateTime() {
  dateTimeElement = document.getElementById("datetime");
  now = new Date();

  options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  date = now.toLocaleDateString("en-GB", options);
  time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  dateTimeElement.textContent = `${date} | ${time}`;
}

// Update the date and time immediately when the page loads
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);

//-----------------THEME

var lightBtn = document.getElementById("light");
var darkBtn = document.getElementById("dark");
var body = document.body;

// Apply the stored theme on page load
document.addEventListener("DOMContentLoaded", () => {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add("light-theme"); // Default to light theme
  }
});

// Light theme button click event
lightBtn.addEventListener("click", () => {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  localStorage.setItem("theme", "light-theme");
});

// Dark theme button click event
darkBtn.addEventListener("click", () => {
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
  localStorage.setItem("theme", "dark-theme");
});

// to save the theme for dashboard page also
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

//-----------------------NADA-----------------------------

// Displaying the logged in user's name
window.onload = function displayName() {
  var fullname = localStorage.getItem("name");
  document.getElementById("userName").innerText = fullname;
};

//  ----------------------Salah ----------------------------

var startWork = document.getElementById("startWork");
var breakWork = document.getElementById("breakWork");
var finishWork = document.getElementById("finishWork");
var ele = document.getElementById("timer");

// setting the default values for the buttons
startWork.style.display = "block";
breakWork.style.display = "none";
finishWork.style.display = "block";

//intial timer disply

var min = 0;
var sec = 1;

// start timer function
function start() {
  timer = setInterval(() => {
    if (sec > 59) {
      // to check if a minuts has passed
      sec = 0;
      min++;
    }
    if (min < 10) {
      //to check double digit minutes
      if (sec < 10) {
        // to check double digits seconds
        ele.innerHTML = "0" + min + ":" + "0" + sec;
        sec++;
      } else {
        ele.innerHTML = "0" + min + ":" + sec;
        sec++;
      }
    } else {
      if (sec < 10) {
        // to check double digits seconds
        ele.innerHTML = min + ":" + "0" + sec;
        sec++;
      } else {
        ele.innerHTML = min + ":" + sec;
        sec++;
      }
    }
  }, 1000);
}
// function to pause the timer or finish it
function finish() {
  clearInterval(timer);
}
// buttons actions

document.getElementById("startWork").addEventListener("click", function () {
  startWork.style.display = "none";
  finishWork.style.display = "block";
  breakWork.style.display = "block";
  start();
});

document.getElementById("breakWork").addEventListener("click", function () {
  breakWork.style.display = "none";
  startWork.style.display = "block";
  finish();
});

document.getElementById("finishWork").addEventListener("click", function () {
  breakWork.style.display = "none";
  finishWork.style.display = "none";
  startWork.style.display = "block";
  finish();
  sec = 0; //to make the timer go back to 00:00
  min = 0; //to make the timer go back to 00:00
});
