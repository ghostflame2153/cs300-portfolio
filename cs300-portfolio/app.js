/*
  Write your own JavaScript interaction here.

  Choose one feature that helps your visitor, such as a mobile menu toggle,
  a project filter, a light and dark theme toggle, expandable case studies,
  or contact form validation. Make sure it works with the keyboard and
  leaves no errors in the browser console.
*/
function changeText(button) {
  if (button.textContent === "Light Mode") {
  button.textContent = "Dark Mode";
  var element = document.body;
  element.classList.toggle("dark-mode");
  }
  else {
    button.textContent = "Light Mode";
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  /* this took me longer than expected, and this has changed a lot. so this is now pretty close to the w3schools version.*/
}


