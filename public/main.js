(() => {
  try {
    document.getElementById('day').innerHTML = ((a = new Date()) =>
      [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ][a.getDay()])();
  } catch (a) {}
})();
