function getLastDayOfMonth(year, month) {
  date = new Date(year, month + 1, 01);
  date.setDate(date.getDate() - 1);

  //anthoer version
  // let date = new Date(year, month + 1, 0);

  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1));
