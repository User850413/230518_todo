{
  const today = new Date();
  console.log(today);
}

{
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  const today = `오늘은 ${year}년 ${month + 1}월 ${date}일 입니다.`;
  document.write(today);
}

{
  //getTime = 1970년 1월 1일부터 경과된 시간을 밀리초로 표기.
  //특정 날짜로부터 남은 일수(밀리초)=특정날짜(밀리초)-현재날짜(밀리초)
  //1초=1000밀리초
  //1분=1000*60밀리초
  //1시간=1000*60*60밀리초
  //1일=1000*60*60*24밀리초

  const today = new Date();
  const nowYear = today.getFullYear();
  const endDate = new Date(nowYear, 6, 10);
  const remainSec = endDate.getTime() - today.getTime();
  const result = Math.ceil(remainSec / (1000 * 60 * 60 * 24));

  console.log(result);
}
