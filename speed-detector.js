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
