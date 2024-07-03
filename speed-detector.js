function speedPoints() {
  const speed = parseInt(prompt("Enter speed car speed in (Km/h):"));

  if (speed <= 70) {
    return "Ok";
  } else if (speed > 70) {
    const demerit = Math.floor((speed - 70) / 5);
    if (demerit > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demerit);
    }
  }
}
console.log(speedPoints());
