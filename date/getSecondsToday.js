function getSecondsTody() {
  console.log(
    new Date().getHours() * 3600 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds()
  );
}
function getSecondsToday_ver2() {
  let now = new Date();

  // 현재 년, 월, 일을 나타내는 객체를 생성
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // 차이(ms)
  console.log(Math.round(diff / 1000)); // 초로 변환
}
getSecondsTody();
getSecondsToday_ver2();
