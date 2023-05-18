//Browser Object Model
{
  //   window.open("https://daum.net");
  //   alert("hello world!");
  //   window.prompt("전화번호는?", "");
  //   window.confirm("삭제하시겠습니까?");
  //   window.setInterval(function () {
  //     document.write("hello");
  //   }, 1000);
  //   window.setTimeout(function () {
  //     console.log("안녕?");
  //   }, 3000);
}
{
  //   window.open("./popup.html", "popup1", "width=520,height=560,left=100,top=50");
}

//screen -사용자의 모니터 정보 제공
{
  console.log(screen.width);
  console.log(screen.height);
}

//location-브라우저 관련 정보
{
  console.log(location.href);
  console.log(location.hash);
  console.log(location.hostname);
  console.log(location.host);
  console.log(location.protocol);
  console.log(location.search);
}

//history
{
  //   console.log(history.length);
}

//navigator
{
  console.log(navigator.userAgent);
}
{
  const box = document.querySelector(".box");
  box.innerHTML = "안녕";

  const info = navigator.userAgent.toLocaleLowerCase();
  if (info.indexOf("windows") >= 0) {
    box.innerHTML = "window";
  } else if (info.indexOf("macintosh") >= 0) {
    box.innerHTML = "mac";
  } else if (info.indexOf("iphone") >= 0) {
    box.innerHTML = "apple";
  } else if (info.indexOf("android") >= 0) {
    box.innerHTML = "android";
  }
}
