// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const message = document.getElementById("greetingMessage");

// Track attendance
let count = 0;
const maxCount = 50;

// Handle the progresss bar
const progressBar = document.getElementById("progressBar");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // get form value
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  // increment count
  count++;
  console.log("Total check-ins:", count);


  // update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  // update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // update attendance counter
  const attendanceCounter = document.getElementById("attendeeCount");
  attendanceCounter.textContent = count;

  // update progress bar
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;
 
  // show welcome message
  message.textContent = "🎉 Welcome, " + name + " from " + teamName + "!";
  

  form.reset();
});

// handle the form displays
const greeting = document.getElementById("greeting");


