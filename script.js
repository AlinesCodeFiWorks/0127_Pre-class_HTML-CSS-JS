function subscribe() {
  const darkModeButton = document.querySelector(".darkModeButton");

  // Toggle button state based on the current text
  if (darkModeButton.innerText === "Dark Mode") {
    darkModeButton.innerHTML = "Dark Mode";
    darkModeButton.classList.add("darkModeOn");
  } else {
    darkModeButton.innerHTML = "Light Mode";
    darkModeButton.classList.remove("darkModeOn");
  }
}
function darkMode() {
  const darkModeOn = document.querySelector(button);
}
