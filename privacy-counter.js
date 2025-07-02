let startTime = new Date().getTime();

function updateTimer() {
  const now = new Date().getTime();
  const elapsed = now - startTime;

  const hours = String(Math.floor(elapsed / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((elapsed % (1000 * 60)) / 1000)).padStart(2, '0');

  document.getElementById("timer").innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);