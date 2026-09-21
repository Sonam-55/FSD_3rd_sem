let studentName = prompt("Enter your name:");
let studentRollNumber = prompt("Enter your roll number:");
let studentMarks = prompt("Enter your marks:");
let result;
function calculateResult(marks) {
  if (marks >= 90) {
    result = "A+";
  } else if (marks >= 80) {
    result = "A";
  } else if (marks >= 70) {
    result = "B";
  } else {
    result = "C";
  }
}
calculateResult(studentMarks);