import moment from 'moment';

export const formatDate = (date, mask, dateFormat) =>
  moment(date, dateFormat).format(mask);

export const getCurrentDate = mask => moment().format(mask);

// Add {amount} of {unit} to a {date}. If no date is passed, uses the current day
export const addToDate = (amount, unit, date = moment().format()) =>
  moment(date).add(amount, unit);

// Check if {targetDate} is between {startDate} and {endDate}.
// If no {targetDate} is passed, uses the current day
export const isBetweenDates = (
  startDate,
  endDate,
  targetDate = getCurrentDate(),
) => moment(targetDate).isBetween(startDate, endDate);

// Check if {targetDate} is before {endDate}.
// If no {targetDate} is passed, uses the current day
export const isBeforeDate = (endDate, targetDate = getCurrentDate()) =>
  moment(targetDate).isBefore(endDate);
