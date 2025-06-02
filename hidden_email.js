// Game Quiz: A simple quiz game where the computer randomly selects a question and answers it.
// This code defines a set of questions, randomly selects one, and simulates the computer's choice and evaluation of the answer.
function hiddenEmail(email) {
    const index = email.indexOf('@');
    user = email.slice(0, index);
    domain = email.slice(index);
    return user.slice(0, 2) + '***' + user.slice(-2) + domain;
}

// Example usage:
let email = "Ayomidelawal16@gmail.com";
email = "Johndqueen22@yahoo.com";

console.log(`Verification code has been sent to ${hiddenEmail(email)}`);