// Get a reference to the message input field by its ID.
// Ensure your HTML has an input element with id="message-input" (e.g., <input type="text" id="message-input">).
const messageInput = document.getElementById("message-input");

// Get a reference to the element where the result message will be displayed.
// Ensure your HTML has an element with id="result-message" (e.g., <p id="result-message"></p>).
const result = document.getElementById("result-message");

// Get a reference to the button element by its ID.
// Ensure your HTML has a button element with id="check-message-btn" (e.g., <button id="check-message-btn">Check Message</button>).
const checkMessageButton = document.getElementById("check-message-btn");

// Define a regular expression to detect specific phrases (case-insensitive) using the alternate sequence.
// It will now match either "please help" or "assist me".
const helpRegex = /please help|assist me/i;

// Declare a dollarRegex variable and assign it a case-insensitive regular expression.
// It now matches:
// 1. One or more digits ([0-9]+)
// 2. Zero or more whitespace characters (\s*)
// 3. An optional (?) non-capturing group (?:...) that matches "hundr[e3]d", "thousand", "million", or "billion"
//    The 'e' in 'hundred' is replaced by [e3] to also match '3'.
// 4. One or more whitespace characters (\s+)
// 5. The text "dollars"
const dollarRegex = /[0-9]+\s*(?:hundr[e3]d|thousand|million|billion)?\s+dollars/i;

// Declare a freeRegex variable.
// It now uses a non-capturing group (?:^|\s) at the beginning to match either
// the start of the string (^) or a whitespace character (\s).
// It also uses a non-capturing group (?:\s|$) at the end to match either
// a whitespace character (\s) or the end of the string ($).
// This ensures that "free money" (or its variations) matches as a whole word,
// even if it's at the beginning or end of the message.
const freeRegex = /(?:^|\s)fr[e3][e3]\s*m[o0]n[e3]y(?:\s|$)/i;

// Declare a stockRegex variable.
// It matches "stock alert" variations as whole words using (?:^|\s) and (?:\s|$)
// and includes character classes for 's'/[s5], 't'/[t7], 'o'/[o0], 'c'/[c{[(], 'a'/[a@4], and 'e'/[e3].
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k\s*[a@4]l[e3]r[t7](?:\s|$)/i;

// Declare a dearRegex variable.
// It matches "dear friend" variations as whole words, mapping vowels to numbers:
// 'e' to [e3], 'a' to [a4], 'i' to [i1|] (as specifically requested to match '1' and '|').
const dearRegex = /(?:^|\s)d[e3][a@4]r\s+fr[i1|][e3]nd(?:\s|$)/i;

// Declare a denyList variable and assign it an array containing all the spam detection regular expressions.
// This array now includes helpRegex, dollarRegex, freeRegex, stockRegex, and dearRegex.
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

/**
 * Checks if a given message is considered spam by testing it against
 * all regular expressions in the `denyList`.
 * It returns `true` if the message matches *any* of the patterns in `denyList`.
 *
 * @param {string} msg - The message string to check for spam.
 * @returns {boolean} - Returns `true` if `msg` matches at least one regex in `denyList`, otherwise `false`.
 */
const isSpam = (msg) => denyList.some(regex => regex.test(msg));

// Attach an event listener to the checkMessageButton.
// This function will execute when the button is clicked.
checkMessageButton.addEventListener("click", () => {
  // Get the value from the message input field and remove any leading/trailing whitespace.
  // This cleaned-up value will be used for checks.
  const message = messageInput.value.trim();

  // Step 1: Check if the message input is empty.
  if (message === "") {
    // If empty, display an alert to the user.
    // (Note: For better user experience, consider a visible message on the page instead of an alert).
    alert("Please enter a message.");
    // Exit the function early if the message is empty to prevent further execution.
    return;
  }

  // Step 2: Check if the message is spam by calling the isSpam function.
  // The 'message' variable (which is messageInput.value.trim()) is passed as an argument.
  if (isSpam(message)) {
    // If isSpam returns true, set the result element's text for a spam message.
    // Ensure the 'result' element exists before trying to set its textContent.
    if (result) {
      result.textContent = "Oh no! This looks like a spam message.";
    }
  } else {
    // If isSpam returns false, set the result element's text for a non-spam message.
    // Ensure the 'result' element exists before trying to set its textContent.
    if (result) {
      result.textContent = "This message does not seem to contain any spam.";
    }
  }

  // Step 3: After the message has been processed and a result displayed,
  // reset the messageInput element's value to an empty string.
  messageInput.value = "";
});
