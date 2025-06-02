const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "Which country has the largest land area?",
    choices: ["Russia", "Canada", "China"],
    answer: "Russia"
  },
  {
    category: "Math",
    question: "What is the square root of 64?",
    choices: ["8", "6", "10"],
    answer: "8"
  },
  {
    category: "Entertainment",
    question: "Which movie features the character 'Jack Sparrow'?",
    choices: ["Pirates of the Caribbean", "Titanic", "Avengers"],
    answer: "Pirates of the Caribbean"
  }
];

// Returns a random question from the questions array
function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Returns a random choice from the provided choices array
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Checks if the computer's choice matches the correct answer
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
