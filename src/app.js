const dayOfTheWeeks = (date = new Date()) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wedsnesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[date.getDay()];
};

try {
  document.getElementById('day').innerHTML = dayOfTheWeeks();
} catch (error) {}

exports.dayOfTheWeeks = dayOfTheWeeks;
