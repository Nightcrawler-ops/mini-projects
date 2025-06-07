function getAverage(scores) {
    if (!scores.length) return 0;
    let total = scores.reduce((sum, score) => sum + score, 0);
    return Number((total / scores.length).toFixed(1));
}

function getGrade(score) {
    if (score === 100) return 'A+';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function hasPassingGrade(score) {
    return getGrade(score) !== 'F';
}

function studentMsg(classScores, studentScore) {
    const avg = getAverage(classScores);
    const grade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);
    return `Class average: ${avg.toFixed(1)}. Your grade: ${grade}. You ${passed ? "passed" : "failed"} the course.`;
}
