
// Esraa

// Toggle Password Visibility
document.querySelector('.togglePassword').addEventListener('click', function () {
  const passwordInput = document.querySelector('#password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
});
document.querySelector('form').addEventListener('submit', function(e) {
  // Prevent form submission
  e.preventDefault();
  var fname = document.getElementById("name").value;
  localStorage.setItem("name", fname);

  // Get the input values
  const email = document.getElementById('email').value.trim();
  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate the inputs
  if (email === '' || name === '' || password === '') {
      alert('Please fill in all fields');
      return false; // Prevent form submission
  }


  window.location.href="../dashboard/dashboard.html" ;
});


function liveDate() {
  // Create a new Date object
  const date = new Date();

  // Array of days for getting the name of the day
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Extract individual date and time components
  var dayName = days[date.getDay()];
  var dateNum = date.getDate();
  var month = date.getMonth() + 1;  // getMonth() is zero-based, so we add 1
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes().toString().padStart(2, "0");

  // Format the date and time string
  var formattedDate = `${dayName}, ${dateNum}/${month}/${year} | ${hours}:${minutes}`;
  console.log(formattedDate);
  // Set the formatted date string to the element with ID 'liveDate'
  document.getElementById("liveDate").textContent = formattedDate;
}

// Initial call to display the date and time immediately
liveDate();

// Update the date and time every second
setInterval(liveDate, 1000);

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      document.body.classList.add(savedTheme);
  }
});


