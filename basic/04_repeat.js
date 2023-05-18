{
  //   let i = 3;
  //   while (i > 0) {
  //     console.log(`i는 ${i}`);
  //     i--;
  //   }
}

{
  //   for (let i = 3; i > 0; i--) {
  //     console.log(`i는 ${i}`);
  //   }
}

{
  //   const day = ["월", "화", "수", "목", "금", "토", "일"];
  //   for (let i = 0; i < day.length; i++) {
  //     console.log(day[i]);
  //   }
}

{
  //   for (let i = 0; i <= 10; i++) {
  //     if (i > 7) {
  //       break;
  //     }
  //     console.log(i);
  //   }
}

{
  //   for (let i = 1; i <= 10; i++) {
  //     if (i % 2 === 0) {
  //       continue;
  //     }
  //     console.log(i);
  //   }
}

{
  //   for (let i = 1; i <= 9; i++) {
  //     console.log(`${i}단 시작-----------------------`);
  //     for (let j = 1; j <= 9; j++) {
  //       console.log(`${i}*${j}=${i * j}`);
  //     }
  //   }
}

//1~25가 입력된 5행 5단의 테이블 출력
{
  let num = 1;
  let tbl = "<table border=1 style='border-collapse:collapse'>";

  for (let i = 1; i <= 5; i++) {
    tbl += "<tr>";
    for (let j = 1; j <= 5; j++) {
      tbl += `<td>${num}</td>`;
      num++;
    }
    tbl += "</tr>";
  }
  tbl += "</table>";
  document.querySelector(".box").innerHTML = tbl;
}
