function updateTime() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
    document.getElementById("date").textContent = now.toLocaleDateString();
    document.getElementById("day").textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
  
    const greeting = document.getElementById("greeting");
    if (now.getHours() < 12) greeting.textContent = "Good Morning ☀️";
    else if (now.getHours() < 18) greeting.textContent = "Good Afternoon 🌤️";
    else greeting.textContent = "Good Evening 🌙";
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  
  // Countdown
  let countdownInterval;
  document.getElementById("start-countdown").addEventListener("click", () => {
    let time = parseInt(document.getElementById("countdown-input").value);
    if (!time || time < 1) return;
  
    document.getElementById("start-countdown").disabled = true;
    document.getElementById("stop-countdown").disabled = false;
  
    countdownInterval = setInterval(() => {
      time--;
      const minutes = Math.floor(time / 60).toString().padStart(2, '0');
      const seconds = (time % 60).toString().padStart(2, '0');
      document.getElementById("countdown-display").textContent = `${minutes}:${seconds}`;
  
      if (time <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("start-countdown").disabled = false;
        document.getElementById("stop-countdown").disabled = true;
      }
    }, 1000);
  });
  
  document.getElementById("stop-countdown").addEventListener("click", () => {
    clearInterval(countdownInterval);
    document.getElementById("start-countdown").disabled = false;
    document.getElementById("stop-countdown").disabled = true;
  });
  
  // Stopwatch
  let stopwatchInterval;
  let elapsed = 0;
  
  document.getElementById("start-stopwatch").addEventListener("click", () => {
    stopwatchInterval = setInterval(() => {
      elapsed++;
      const hrs = Math.floor(elapsed / 3600).toString().padStart(2, '0');
      const mins = Math.floor((elapsed % 3600) / 60).toString().padStart(2, '0');
      const secs = (elapsed % 60).toString().padStart(2, '0');
      document.getElementById("stopwatch-display").textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
  
    document.getElementById("start-stopwatch").disabled = true;
    document.getElementById("stop-stopwatch").disabled = false;
    document.getElementById("reset-stopwatch").disabled = false;
  });
  
  document.getElementById("stop-stopwatch").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    document.getElementById("start-stopwatch").disabled = false;
    document.getElementById("stop-stopwatch").disabled = true;
  });
  
  document.getElementById("reset-stopwatch").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    elapsed = 0;
    document.getElementById("stopwatch-display").textContent = "00:00:00";
    document.getElementById("start-stopwatch").disabled = false;
    document.getElementById("stop-stopwatch").disabled = true;
    document.getElementById("reset-stopwatch").disabled = true;
  });
  
  
  