export function convertDate(date, time) {
  const convertedDate = new Date(`${date}T${time}`);
  const monthIndex = convertedDate.getMonth();
  const newDate = convertedDate.getDate();
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
  return `${months[monthIndex]} ${newDate}`;
}

export function convertTime(date, time) {
  const convertedTime = new Date(`${date}T${time}`);
  const convertedHours = convertedTime.getHours();
  const hours = convertedHours < 10 ? `0${convertedHours}` : convertedHours;
  const convertedMinutes = convertedTime.getMinutes();
  const minutes =
    convertedMinutes < 10 ? `0${convertedMinutes}` : convertedMinutes;
  return `${hours}:${minutes}`;
}

export function getDayOfWeek(date, time) {
  const convertedTime = new Date(`${date}T${time}`);
  const dayIndex = convertedTime.getDay();
  const dayOfWeek = [
    {
      abbr: "Sun",
      full: "Sunday",
    },
    {
      abbr: "Mon",
      full: "Monday",
    },
    {
      abbr: "Tue",
      full: "TUesday",
    },
    {
      abbr: "Wed",
      full: "Wednesday",
    },
    {
      abbr: "Thu",
      full: "Thursday",
    },
    {
      abbr: "Fri",
      full: "Friday",
    },
    {
      abbr: "Sat",
      full: "Saturday",
    },
  ];
  return dayOfWeek[dayIndex];
}

export const getPointsDifferential = (max, current) =>
  parseInt(current) - parseInt(max);

export const getThisYear = () =>  Date.now().getFullYear();;
