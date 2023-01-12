const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDateTime = (input = null) => {
  const today = input ? new Date(input) : new Date();

  const year = String(today.getFullYear());
  const month = months[today.getMonth()];
  const date = String(today.getDate());
  const day = days[today.getDay()];

  const hour = String(today.getHours() % 12 || 12).padStart(2, "0");
  const min = String(today.getMinutes()).padStart(2, "0");
  const period = today.getHours() < 12 ? "AM" : "PM";

  return { year, month, date, day, hour, min, period };
};
