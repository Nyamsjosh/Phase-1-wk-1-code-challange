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
