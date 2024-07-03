function inputofStudentMarks() {
  const marks = parseInt(prompt("Input Student marks:")); //Declaring input for marks
  console.log(marks);
  if (marks < 0 || marks > 100 || isNaN(marks) || typeof marks !== "number") {
    //For marks less than 0, marks greater than 100 and value that is Not a Number(NaN)
    return "Invalid marks";
  } else if (marks > 79) {
    return "A"; //Marks greater than 79 output Grade A
  } else if (marks <= 79 && marks >= 60) {
    return "B"; //Marks greater than 59 and less than 80 output Grade B
  } else if (marks <= 59 && marks >= 49) {
    return "C"; //Marks greater than 48 and less than 60 output Grade C
  } else if (marks <= 49 && marks >= 40) {
    return "D"; //Marks greater than 39 and less than 79 output Grade D
  } else return "E"; //Marks less than 40 output Grade E
}
console.log(inputofStudentMarks());
