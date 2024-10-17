const toggleButton = document.getElementsByClassName('dot')[0];
const hiddenElement = document.getElementsByClassName('nav-bar')[0];

toggleButton.addEventListener('click', function() {
  if (hiddenElement.style.visibility === 'hidden') {
    hiddenElement.style.visibility = 'visible';  // Show the element

    hiddenElement.style.transition = 'right 0.5s ease-in-out';
  } else {
    hiddenElement.style.visibility = 'hidden';   // Hide the element
  }
});


function showElement() {
  const selectedEar = document.querySelector('input[name="ear"]:checked');
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedEar || !selectedOption) {
      alert("Please select both an ear and an option before proceeding.");
      return;
  }

  // Show the calendar
  const calendar = document.querySelector(".calendar");
  calendar.style.display = "block"; // Show the calendar

  //
}

function showContent(id) {
  // Hide all content boxes first
  document.querySelectorAll('.content-box').forEach(function(box) {
      box.style.display = 'none';
  });

  // Show the selected content box
  document.getElementById(id).style.display = 'block';
}