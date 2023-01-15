function getLocalTime(data) {
  const date = new Date();
  const time = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = time + localOffset;
  const localTime = utc + 1000 * data;
  const localTimeDate = new Date(localTime);
  return localTimeDate.toLocaleString();
}
function kToC(temp) {
  return temp - 273.15;
}
function cToF(temp) {
  return (temp * 9) / 5 + 32;
}
function fToC(temp) {
  return ((temp - 32) * 5) / 9;
}
function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export{getLocalTime, kToC, cToF, fToC, cap};