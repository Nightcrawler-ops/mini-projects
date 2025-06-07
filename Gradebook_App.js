function getAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length; // return raw average
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  const average = getAverage(scores); // raw float
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  return `Class average: ${average}. Your grade: ${grade}. You ${passed ? "passed" : "failed"} the course.`;
}
function gradebookApp(scores, studentScore) {
  // Validate inputs
  if (!Array.isArray(scores) || scores.length === 0 || typeof studentScore !== 'number') {
    return "Invalid input. Please provide a valid scores array and student score.";
  }

  // Calculate and return the message
  return studentMsg(scores, studentScore);
}