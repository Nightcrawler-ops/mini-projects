// Get references to DOM elements
const input = document.getElementById("username");
const loginButton = document.getElementById("loginButton");
const error = document.getElementById("errorMessage");
const welcomeMessage = document.getElementById("welcomeMessage");

// Add click event listener to the login button
loginButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission
    const username = input.value; // Get the value from the input field

    // Hide messages initially
    error.style.display = "none";
    welcomeMessage.style.display = "none";

    if (username) {
        // If username is entered, show welcome message
        welcomeMessage.innerHTML = `Welcome, ${username}!`;
        welcomeMessage.style.display = "block";
        // Hide the welcome message after 3 seconds
        setTimeout(() => {
            welcomeMessage.innerHTML = "";
            welcomeMessage.style.display = "none";
        }, 3000);
        // Additional login handling can be added here
    } else {
        // If username is empty, show error message
        error.innerHTML = "Please enter a username.";
        error.style.display = "block";
        // Hide the error message after 3 seconds
        setTimeout(() => {
            error.innerHTML = "";
            error.style.display = "none";
        }, 3000);
    }
});