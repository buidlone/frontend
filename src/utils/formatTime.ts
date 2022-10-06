
function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function formatTime(unixTimestamp: number) {
const date = new Date(unixTimestamp * 1000);
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
  seconds,
)}`;

const year = date.getFullYear();
const month = padTo2Digits(date.getMonth() + 1);
const day = padTo2Digits(date.getDate());

const dateTime = `${year} ${month} ${day} ${time}`;


return dateTime
}






