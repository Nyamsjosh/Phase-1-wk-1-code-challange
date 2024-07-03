function inputofStudentMarks() {
  const marks = parseInt(prompt("Input Student marks:"));
  console.log(marks);
  if (marks < 0 || marks > 100 || isNaN(marks) || typeof marks !== "number") {
    return "Invalid marks";
  } else if (marks > 79) {
    return "A";
  } else if (marks <= 79 && marks >= 60) {
    return "B";
  } else if (marks <= 59 && marks >= 49) {
    return "C";
  } else if (marks <= 49 && marks >= 40) {
    return "D";
  } else return "E";
}
console.log(inputofStudentMarks());
