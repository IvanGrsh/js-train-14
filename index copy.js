const date = new Date();
const dateString = date.toISOString();

console.log("year", date.getFullYear());
date.setFullYear(2020);
console.log("year", date.getFullYear());

console.log("month", date.getMonth());
date.setMonth(1);
console.log("month", date.getMonth());

console.log("date", date.getDate());
date.setDate(27);
console.log("date", date.getDate());

console.log("day", date.getDay());

console.log("minutes", date.getMinutes());
date.setMinutes(27);
console.log("minutes", date.getMinutes());

console.log("seconds", date.getSeconds());
date.setSeconds(27);
console.log("seconds", date.getSeconds());

console.log("seconds", date.getMilliseconds());
date.setMilliseconds(500);
console.log("seconds", date.getMilliseconds());

console.log(date.toDateString());
console.log(date);

// console.log(date.getFullYear());
// date.setFullYear(2020);
// console.log(date);
// console.log(date.getUTCFullYear());

// console.log(dateString);

// console.log(new Date(dateString));
// console.log(Date.parse(dateString));

// const date2 = Date.parse(dateString) + 1000 * 60 * 5;
// console.log(date2);

// console.log(date.toString());
// console.log(date);

// console.log(date.toUTCString());
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// const zone = date.getTimezoneOffset() / -60;
// console.log(zone);

const user = -3;
function getUserTimeZone(timezone) {
  //   let date = Date.now();

  //   let date = new Date(2923, 5, 26, 12, 30, 0, 0);
  let date = new Date(Date.UTC(2923, 5, 26, 12, 30, 0, 0));

  //   console.log(date.toString());
  //   console.log(date.toUTCString());
  //   console.log(date.getHours());
  //   console.log(date.getUTCHours());
  //   console.log(date.getTime());
  //   console.log(date.toUTCString());
  date.setHours(date.getUTCHours() + timezone);

  //   const myTimezone = date.getTimezoneOffset() / -60;
  //   const myTimezone = new Date().getTimezoneOffset() / -60;
  //   date.setTime(date.getTime() - 1000 * 60 * 60 * myTimezone);

  //   date.setTime(date.getTime() + 1000 * 60 * 60 * timezone);

  //   date -= 1000 * 60 * 60 * myTimezone;

  //   date += 1000 * 60 * 60 * timezone;
  //   console.log(myTimezone);

  //   return date.toString();
  return date;
}
const userDate = getUserTimeZone(user);

// console.log(userDate.toString());
// console.log(userDate.toUTCString());
// console.log(userDate.getHours());
// console.log(userDate.getUTCHours());
// console.log(userDate.toString());
// getUserTimeZone(user);
// console.log(getUserTimeZone(user));
// console.log(new Date().toString(1708980228874));

// console.log(new Date(getUserTimeZone(user)).toString());
// console.log(new Date().toUTCString());

// console.log(new Date(30089017800000).toUTCString());
