function getSecondsToTomorrow() {
  console.log(
    86400 -
      ((new Date().getHours() * 60 + new Date().getMinutes()) * 60 +
        new Date().getSeconds())
  );
}
function getSecondsToTomorrow_ver2() {
  let now = new Date();

  // 내일 날짜
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // 차이(ms)
  console.log(Math.round(diff / 1000)); // 초로 변환
}
getSecondsToTomorrow();
getSecondsToTomorrow_ver2();
``