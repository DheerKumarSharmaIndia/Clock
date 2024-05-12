function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, 0.5 degrees per minute
  const minuteDeg = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
  const secondDeg = seconds * 6; // 6 degrees per second

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to update the clock immediately
updateClock();
