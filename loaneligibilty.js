// Game Quiz: A simple quiz game where the computer randomly selects a question and answers it.
// This code defines a set of questions, randomly selects one, and simulates the computer's choice and evaluation of the answer.
const loanEligibility = (income, creditScore, debtToIncomeRatio) => {
  if (income < 30000) {
    return "Not eligible for a loan due to low income.";
  }
  if (creditScore < 500) {
    return "Not eligible for a loan due to low credit score.";
  }
  if (debtToIncomeRatio > 0.4) {
    return "Not eligible for a loan due to high debt-to-income ratio.";
  }
  return "Eligible for a loan.";
}
// Example usage:
let income = 28000; // Monthly income
let creditScore = 500; // Credit score
let debtToIncomeRatio = 0.3; // Debt-to-income ratio

console.log(loanEligibility(income, creditScore, debtToIncomeRatio));