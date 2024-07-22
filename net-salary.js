function paye(taxableIncome) {
  let paye = 0
  if (taxableIncome <= 24000) {
    paye = taxableIncome * 0.1
  } else if (taxableIncome <= 32333) {
    paye = 2400 + (taxableIncome - 24000) * 0.25
  } else if (taxableIncome <= 500000) {
    paye = 4483.25 + (taxableIncome - 32333) * 0.3
  } else if (taxableIncome <= 800000) {
    paye = 144783.35 + (taxableIncome - 500000) * 0.325
  } else {
    paye = 242083.25 + (taxableIncome - 800000) * 0.35
  }
  return paye
}

function nhif(grossSalary) {
  let nhif = 0
  // NHIF deductions
  if (grossSalary <= 5999) {
    nhif = 150
  } else if (grossSalary <= 7999) {
    nhif = 300
  } else if (grossSalary <= 11999) {
    nhif = 400
  } else if (grossSalary <= 14999) {
    nhif = 500
  } else if (grossSalary <= 19999) {
    nhif = 600
  } else if (grossSalary <= 24999) {
    nhif = 750
  } else if (grossSalary <= 29999) {
    nhif = 850
  } else if (grossSalary <= 34999) {
    nhif = 900
  } else if (grossSalary <= 39999) {
    nhif = 950
  } else if (grossSalary <= 44999) {
    nhif = 1000
  } else if (grossSalary <= 49999) {
    nhif = 1100
  } else if (grossSalary <= 59999) {
    nhif = 1200
  } else if (grossSalary <= 69999) {
    nhif = 1300
  } else if (grossSalary <= 79999) {
    nhif = 1400
  } else if (grossSalary <= 89999) {
    nhif = 1500
  } else if (grossSalary <= 99999) {
    nhif = 1600
  } else {
    nhif = 1700
  }

  return nhif
}

function nssf(grossSalary) {
  const tier1Limit = 7000
  const tier2Limit = 36000

  let nssfTier1 = Math.min(grossSalary, tier1Limit) * 0.06
  let nssfTier2 =
    Math.max(0, Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit)) *
    0.06

  return nssfTier1 + nssfTier2
}
//Calculations of the net Salary
function netSalaryCalculator() {
  const basicSalary = parseFloat(prompt('Enter basic salary:'))
  const benefits = parseFloat(prompt('Enter benefits:'))

  if (
    isNaN(basicSalary) ||
    basicSalary < 0 ||
    isNaN(benefits) ||
    benefits < 0
  ) {
    console.error(
      'Invalid input. Please enter valid numeric values for salary and benefits.'
    )
    return
  }
  // Calculations of the gross salary
  const grossSalary = basicSalary + benefits
  // Calculations of the taxable income
  const taxableIncome = grossSalary

  // Calculations of the deductions
  const payeAmount = paye(taxableIncome)
  const nhifAmount = nhif(grossSalary)
  const nssfAmount = nssf(grossSalary)

  const personalRelief = 2400
  const housingLevy = grossSalary * 0.015
  const netSalary =
    grossSalary -
    payeAmount -
    nhifAmount -
    nssfAmount -
    housingLevy +
    personalRelief

  console.log(`Gross Salary: ${grossSalary}`)
  console.log(`PAYE: ${payeAmount}`)
  console.log(`NHIF: ${nhifAmount}`)
  console.log(`NSSF: ${nssfAmount}`)
  console.log(`Housing Levy: ${housingLevy}`)
  console.log(`Net Salary: ${netSalary}`)
}

netSalaryCalculator()
