const { dayOfTheWeeks } = require('./app');

test('getDay return the long-format day of the week', () => {
  const day = dayOfTheWeeks(new Date('3/11/2020'));
  expect(day).toBe('Wednesday');
});
