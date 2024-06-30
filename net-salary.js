function PAYE(taxableIncome) {
  let paye = 0;
  if (taxableIncome <= 2400) {
    paye = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
    paye = 2400 + (taxableIncome - 24000) * 0.25;
  } else if (taxableIncome <= 500000) {
    paye = 4225 + (taxableIncome - 32333) * 0.3;
  } else if (taxableIncome <= 800000) {
    paye = 134925 + (taxableIncome - 500000) * 0.325;
  } else {
    paye = 232425 + (taxableIncome - 800000) * 0.35;
  }
  return paye;
}

function NHIF(grossSalary) {
  let nhifDeduction = 0;

  if (grossSalary <= 5999) {
    nhifDeduction = 150; //NHIF Deductions
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

function NSSF(grossSalary) {
  const tier1Limit = 7000;
  const tier2Limit = 36000;

  let nssfDeductionTier1 = Math.min(grossSalary, tier1Limit) * 0.06;
  let nssfDeductionTier2 = Math.max(0, Math.min(grossSalary - tier2Limit));

  return nssfDeductionTier1 + nssfDeductionTier2;
}

function netSalaryCalculator() {
  const basicSalary = 30000;
  const benefits = 10000;
  const grossSalary = basicSalary + benefits;
  const taxableIncome = grossSalary;

  const paye = PAYE(taxableIncome);
  const nhifDeduction = NHIF(grossSalary);
  const nssfDeduction = NSSF(grossSalary);

  const personalRelief = 2400;
  const housingLevy = grossSalary * 0.015;
  const netSalaryCalc =
    grossSalary - paye - nhifDeduction - nssfDeduction - housingLevy;
  console.log(grossSalary);
  console.log(paye);
  console.log(nhifDeduction);
  console.log(nssfDeduction);
  console.log(housingLevy);
  console.log(netSalaryCalc);
}
