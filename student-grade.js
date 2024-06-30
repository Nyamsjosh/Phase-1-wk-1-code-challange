let marks = 67; //67 is an example of marks between 0-100.

function inputofStudentMarks() {
  if (marks > 79) {
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
