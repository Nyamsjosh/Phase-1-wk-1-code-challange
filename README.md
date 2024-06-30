# Phase-1-wk-1-code-challange

# INSRUCTIONS

For one to get access to the code, just click on the ...link: https://github.com/Nyamsjosh/Phase-1-wk-1-code-challange ...and it will take you to the git hub repository where it is stored.

# Speed Points Calculator

# Introduction

This JavaScript program calculates the demerit points based on the speed of a vehicle. If the speed exceeds the speed limit, it determines whether the driver should receive a go ahead, demerit points, or have their license suspended.

# Table of contents

-How the code works
-THe code itself
-More explanation on the code
-How to customize the code

# How the code works

This program checks on the speed of a vehicle in reference to a speed limit of 70. Based on the speed, it returns:

"Ok" if the speed is 70 or below.

The number of demerit points if the speed exceeds 70. One demerit point is added for every 5 km/h over the speed limit.
Wheras the is "License Suspended" if the number of demerit points exceeds 12.

# The code itself

const speed = 140;

function speedPoints() {
if (speed <= 70) {
return "Ok";
} else if (speed > 70) {
const demerit = Math.floor((speed - 70) / 5);
if (demerit > 12) {
return "License Suspended";
} else {
return demerit;
}
}
}

console.log(speedPoints());

# More explanation on the code

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

# How to customize the code

To use this code with a different speed, simply change the value of the speed variable:

const speed = 85;
console.log(speedPoints()); // Output will be 3
You can also adjust the speed limit by adjusting the conditions within the speedPoints() function.

## Students Grade Calculator

This code is very simple and understandable in calculating the marks and grades of a given number of students in a specific institution.The grading system used follows the criteria below:

Grade A for marks that are greater than 79
Grade B for marks that are between 60 and 79
Grade C for marks that are between 49 and 59
Grade D for marks that are between 40 and 49
Grade E for marks that are less than 40

# Table of contents

-How the code can be used
-How the code is
-Explanation of the code
-How to customize the code

# How the code can be used

The code can be run in any JavaScript workspace. The example provided uses a fixed value for marks (67) and determines the corresponding grade.

# How the code is

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

# Explanation of the code

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

# How to customize the code

To use this code with different marks, simply change the value of the marks variable:

let marks = 85;
console.log(inputofStudentMarks()); // Output will be grade "A"
You can also modify the grading criteria by adjusting the conditions within the inputofStudentMarks() function.

## Net Salary Calculator

This JavaScript program calculates the net salary of an employee based on their gross salary, benefits, and various deductions. The program includes functions for calculating PAYE (Pay As You Earn) tax, NHIF (National Hospital Insurance Fund) deductions, NSSF (National Social Security Fund) deductions, and other statutory deductions.

# Table of Contents

-Functions of the code
-PAYE(taxableIncome)
-NHIF(grossSalary)
-NSSF(grossSalary)
-netSalaryCalculator()
-How the code is used

# Functions of the code

PAYE(taxableIncome)
Calculates the PAYE tax based on the taxable income.

function PAYE(taxableIncome) {
let paye = 0;
if (taxableIncome <= 2400) {
paye = taxableIncome _ 0.1;
} else if (taxableIncome <= 32333) {
paye = 2400 + (taxableIncome - 24000) _ 0.25;
} else if (taxableIncome <= 500000) {
paye = 4225 + (taxableIncome - 32333) _ 0.3;
} else if (taxableIncome <= 800000) {
paye = 134925 + (taxableIncome - 500000) _ 0.325;
} else {
paye = 232425 + (taxableIncome - 800000) \* 0.35;
}
return paye;
}

# NHIF(grossSalary)

Calculates the NHIF deduction based on the gross salary.

function NHIF(grossSalary) {
let nhifDeduction = 0;

if (grossSalary <= 5999) {
nhifDeduction = 150; // NHIF Deductions
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
return nhifDeduction;
}

# NSSF(grossSalary)

Calculates the NSSF deduction based on the gross salary.

function NSSF(grossSalary) {
const tier1Limit = 7000;
const tier2Limit = 36000;

let nssfDeductionTier1 = Math.min(grossSalary, tier1Limit) \* 0.06;
let nssfDeductionTier2 = Math.max(0, Math.min(grossSalary - tier2Limit));

return nssfDeductionTier1 + nssfDeductionTier2;
}

# netSalaryCalculator()

Calculates the net salary based on the gross salary, benefits, and various deductions.

function netSalaryCalculator() {
const basicSalary = 30000;
const benefits = 10000;
const grossSalary = basicSalary + benefits;
const taxableIncome = grossSalary;

const paye = PAYE(taxableIncome);
const nhifDeduction = NHIF(grossSalary);
const nssfDeduction = NSSF(grossSalary);

const personalRelief = 2400;
const housingLevy = grossSalary \* 0.015;
const netSalaryCalc =
grossSalary - paye - nhifDeduction - nssfDeduction - housingLevy;
console.log(grossSalary);
console.log(paye);
console.log(nhifDeduction);
console.log(nssfDeduction);
console.log(housingLevy);
console.log(netSalaryCalc);
}

How the code is used
To use the net salary calculator, call the netSalaryCalculator function. This function uses predefined values for basic salary and benefits, calculates various deductions, and logs the gross salary, PAYE, NHIF deduction, NSSF deduction, housing levy, and net salary to the console.

# netSalaryCalculator();

Example Output

40000
4225
850
0
600
34325
This output is based on a gross salary of 40000, which includes a basic salary of 30000 and benefits of 10000.
