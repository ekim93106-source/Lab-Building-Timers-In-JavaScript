function countdownTimer(startTime, interval) {
  let remaining = startTime;

  const timerId = setInterval(() => {
    console.log(remaining);

    if (remaining === 0) {
      clearInterval(timerId);
    }

    remaining--;
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };


