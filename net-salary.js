// Declaring input for basic salary and benefits
const basicSalaryInput = prompt("Enter basic salary: ");
const benefitsInput = prompt("Enter benefits: ");

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
    return grossSalary * 0.1;
  } else if (grossSalary <= 38895) {
    return 2890 + (grossSalary - 28895) * 0.15;
  } else if (grossSalary <= 56395) {
    return 5890 + (grossSalary - 38895) * 0.2;
  } else if (grossSalary <= 71695) {
    return 10890 + (grossSalary - 56395) * 0.25;
  } else {
    return 15190 + (grossSalary - 71695) * 0.3;
  }
  return paye;
}

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

// Calculations of the NSSF Deductions
const nssfDeductions = grossSalary * 0.06;
console.log(`NSSF Deductions: ${nssfDeductions}`);

// Calculations of the Housing Levy
const housingLevy = grossSalary * 0.015;
console.log(`Housing Levy: ${housingLevy}`);

// Calculations of the Net Salary
const netSalary = grossSalary - paye - nhif - nssfDeductions - housingLevy;
console.log(`Net Salary: ${netSalary}`);

const nhif = calculateNHIF(grossSalary);
console.log(`NHIF Deductions: ${nhif}`);

//Calculations of the PAYE
const paye = payeCalculations(grossSalary);
console.log(`PAYE: ${paye}`);
