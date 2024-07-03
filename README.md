# Phase-1-wk-1-code-challange

# How to run the code

1. For one to get access to the code, just click on the ...link below:

   https://github.com/Nyamsjosh/Phase-1-wk-1-code-challange

...and it will take you to the git hub repository where it is stored.

2. Then open the index.Html file in a code editor and go live to view it in your preferd browser.

3. When the browser opens you'll see a pop up on top asking you to input your values

4. And then while in the browser click on F12 on your keyboard and go to console to view your output.

# Speed Points Calculator

## Introduction

This JavaScript program calculates the demerit points based on the speed of a vehicle. If the speed exceeds the speed limit, it determines whether the driver should receive a go ahead, demerit points, or have their license suspended.

### Table of contents

- [How the code works](#how-the-code-works)
- [The code itself](#the-code-itself)
- [More explanation on the](#more-explanation-on-the-code)
- [How to customize the code](#how-to-customize-the-code-1)

### How the code works

This program checks on the speed of a vehicle in reference to a speed limit of 70. Based on the speed, it returns:

"Ok" if the speed is 70 or below.

The number of demerit points if the speed exceeds 70. One demerit point is added for every 5 km/h over the speed limit.
Wheras the is "License Suspended" if the number of demerit points exceeds 12.

### The code itself

function speedPoints() {
const speed = parseInt(prompt("Enter speed car speed in (Km/h):")); //Declaring input for speed
if (speed <= 70) {
//For speed less than 69 outputs Ok
return "Ok";
} else if (speed > 70) {
const demerit = Math.floor((speed - 70) / 5); //Declaring demerit point
if (demerit > 12) {
console.log("License suspended");
} else {
console.log("Points: " + demerit);
}
}
}
console.log(speedPoints());

### More explanation on the code

-Declaring the Variable:

const speed = 140; declares a constant variable speed and gets it with a value of 140.

-Function Definition:

The speedPoints function checks the value of speed:
If speed is 70 or below, it returns "Ok".

If speed is above 70, it calculates the demerit points as Math.floor((speed - 70) / 5).

If the demerit points exceed 12, it returns "License Suspended".

Otherwise, it returns the calculated demerit points.
Function Execution:

The function speedPoints() is called, and the result is logged to the console using console.log.
Output

For the provided example, the output will be:

14
This is because the value of speed (140) results in 14 demerit points ((140 - 70) / 5).

### How to customize the code

To use this code with a different speed, simply change the value of the speed variable:

const speed = 85;
console.log(speedPoints()); // Output will be 3
You can also adjust the speed limit by adjusting the conditions within the speedPoints() function.

# Students Grade Calculator

This code is very simple and understandable in calculating the marks and grades of a given number of students in a specific institution.The grading system used follows the criteria below:

Grade A for marks that are greater than 79
Grade B for marks that are between 60 and 79
Grade C for marks that are between 49 and 59
Grade D for marks that are between 40 and 49
Grade E for marks that are less than 40

### Table of contents

- [How the code can be used](#how-the-code-can-be-used)
- [How the code is](#how-the-code-is)
- [Explanation of the code](#explanation-of-the-code)
- [How to customize the code](#how-to-customize-the-code)

### How the code can be used

The code can be run in any JavaScript workspace. The example provided uses a fixed value for marks (67) and determines the corresponding grade.

### How the code is

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

### Explanation of the code

Variable Declaration:

let marks = 67; declares a variable marks and gives it a value of 67.
Function Definition:

The inputofStudentMarks function checks the value of marks and returns a grade based on the criteria described above.
Function Execution:

The function inputofStudentMarks() is called, and the result is logged to the console using console.log.
Output
For the provided example, the output will be:

B
And this is because the value of marks (67) falls within the range for grade B (60 to 79).

### How to customize the code

To use this code with different marks, simply change the value of the marks variable:

let marks = 85;
console.log(inputofStudentMarks()); // Output will be grade "A"
You can also modify the grading criteria by adjusting the conditions within the inputofStudentMarks() function.

# Net Salary Calculator

This JavaScript program calculates the net salary of an employee based on their gross salary, benefits, and various deductions. The program includes functions for calculating PAYE (Pay As You Earn) tax, NHIF (National Hospital Insurance Fund) deductions, NSSF (National Social Security Fund) deductions, and other statutory deductions.

### Table of Contents

- [Functions of the code](#functions-of-the-code)
- [PAYE(taxableIncome)](#payetaxableincome)
- [NHIF(grossSalary)](#nhifgrosssalary)

- [netSalaryCalculator](#net-salary-calculator)

### PAYE(taxableIncome)

// Declaring input for basic salary and benefits
const inputBasicSalary = prompt("Enter basic salary: ");
const inputBenefits = prompt("Enter benefits: ");

// Converts the inputs strings to Numbers
const basicSalary = parseFloat(inputBasicSalary);
const benefits = parseFloat(inputBenefits);

// Checking for input that is invalid.
if (
isNaN(basicSalary) ||
isNaN(benefits) ||
basicSalary <= 0 ||
benefits <= 0
) {
console.log(
"Invalid input. Please enter valid numbers that are greater than 0 for Basic salary and Benefits."
);
}
// Calculation of the gross Salary
const grossSalary = basicSalary + benefits;
console.log(`Gross Salary: ${grossSalary}`);

//Calculation of the PAYE Tax
function payeCalculations(grossSalary) {
let paye = 0;
if (grossSalary <= 28895) {
return grossSalary _ 0.1;
} else if (grossSalary <= 38895) {
return 2890 + (grossSalary - 28895) _ 0.15;
} else if (grossSalary <= 56395) {
return 5890 + (grossSalary - 38895) _ 0.2;
} else if (grossSalary <= 71695) {
return 10890 + (grossSalary - 56395) _ 0.25;
} else {
return 15190 + (grossSalary - 71695) \* 0.3;
}
return paye;

### NHIF(grossSalary)

function NHIF(grossSalary) {
let nhifDeduction = 0;

if (grossSalary <= 5999) {
nhifDeduction = 150; //Calculations of the NHIF Deductions
} else if (grossSalary <= 7999) {
nhifDeduction = 300;
} else if (grossSalary <= 11999) {
nhifDeduction = 400;
} else if (grossSalary <= 14999) {
nhifDeduction = 500;
} else if (grossSalary <= 19999) {
nhifDeduction = 600;
} else if (grossSalary <= 24999) {
nhifDeduction = 750;
} else if (grossSalary <= 29999) {
nhifDeduction = 850;
} else if (grossSalary <= 34999) {
nhifDeduction = 900;
} else if (grossSalary <= 39999) {
nhifDeduction = 950;
} else if (grossSalary <= 44999) {
nhifDeduction = 1000;
} else if (grossSalary <= 49999) {
nhifDeduction = 1100;
} else if (grossSalary <= 59999) {
nhifDeduction = 1200;
} else if (grossSalary <= 69999) {
nhifDeduction = 1300;
} else if (grossSalary <= 79999) {
nhifDeduction = 1400;
} else if (grossSalary <= 89999) {
nhifDeduction = 1500;
} else if (grossSalary <= 99999) {
nhifDeduction = 1600;
} else {
nhifDeduction = 1700;
}
}

### netSalaryCalculator

//Calculations of the NHIF Deductions
const nhif = NHIF(grossSalary);
console.log(`NHIF Deductions: ${nhif}`);

//Calculations of the PAYE
const paye = payeCalculations(grossSalary);
console.log(`PAYE: ${paye}`);

// Calculations of the NSSF Deductions
const nssfDeductions = grossSalary \* 0.06;
console.log(`NSSF Deductions: ${nssfDeductions}`);

// Calculations of the Housing Levy
const housingLevy = grossSalary \* 0.015;
console.log(`Housing Levy: ${housingLevy}`);
