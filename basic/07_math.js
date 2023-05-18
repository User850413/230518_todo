{
  console.log(Math.PI);

  const sum = 9.4;
  const sum2 = "12.112563";

  console.log(Math.round(sum)); //소수점 첫째자리에서 반올림하여 정수 반환
  console.log(Math.ceil(sum)); //소수점 첫째자리에서 올림하여 정수 반환
  console.log(Math.floor(sum)); //소수점 첫째자리에서 내림하여 정수 반환
  console.log(Math.pow(29, 4)); //첫번째 수를 두번쨰 수 만큼 제곱하여 반환
  console.log(parseInt(sum2)); //문자열을 정수로 반환 result=12
  console.log(Number(sum2)); //number형으로 변환 result=12.112563(숫자형)
}

{
  const num = Math.random();
  console.log(num); //0에서 1 사이의 실수를 랜덤반환

  console.log(Math.ceil(Math.random() * 10));

  const food = ["라면", "김밥", "우동", "칼국수", "햄버거"];
  const randomNum = Math.floor(Math.random() * food.length);
  console.log(food[randomNum]);
}
