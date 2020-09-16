var timer;
document.querySelector("#input").addEventListener("input", function (e) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
    console.log("여기에 ajax 요청", e.target.value);
  }, 200);
});
