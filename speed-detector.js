const speed = 140;
function speedPoints() {
  const speed = parseInt(prompt("Enter speed car speed in (Km/h):"));

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
