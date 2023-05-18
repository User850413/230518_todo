{
  const arr1 = new Array();
  arr1[0] = 10;
  arr1[1] = "hello";
  console.log(arr1);

  const arr2 = [1, 3, 5, 7, 9];
  console.log(arr2);

  const arr3 = ["what", "are", "you", "doing", 100, true];
  console.log(arr3);

  const arr4 = [
    "a",
    { model: "apple", price: "1000" },
    { model: "galaxy", price: "3000" },
  ];
  console.log(arr4[1].model);
  console.log(arr4[3]);
}

{
  const books = ["html", "css", "javascript", "react"];
  console.log(books);
  console.log(books.length);
  console.log(books[0]);
  console.log(books[books.length - 1]);

  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
  }

  for (let book of books) {
    console.log(book);
  }
  for (let i in books) {
    console.log(books[i]);
  }

  //forEach
  books.forEach((book) => {
    console.log("📘" + book);
  });

  //map:새로운 배열을 return
  const newBooks = books.map((item) => `${item} 💿`);
  console.log(newBooks);
}

// 3.배열 매서드
{
  const books = ["html", "css", "javascript", "jquery", "react"];

  //   배열을 문자열로 만들기
  console.log(books.join(" - "));
  console.log(books.reverse());
  console.log(books.sort());

  // 뒤에 추가
  books.push("php");
  console.log(books);

  //앞에 추가
  books.unshift("jsp");
  console.log(books);

  //뒤에서 삭제
  books.pop();
  console.log(books);

  //앞에서 삭제
  books.shift();
  console.log(books);

  //splice
  books.splice(2, 1, "hahaha!", "hohoho~");
  console.log(books);

  //배열 합치기
  const books2 = ["git", "nodejs"];
  const newBooks = books.concat(books2);
  console.log(newBooks);

  //slice - 구간을 잘라서 새로운 배열 리턴
  console.log(newBooks.slice(2, 4));

  //검색
  console.log(books);
  console.log(books.indexOf("nodejs")); //인덱스 번호 찾기, 없는 요소면 -1 리턴
  console.log(books.includes("css")); //있으면 true,없으면 false
}

const sojus = [
  { name: "대선", price: 1200, sale: true, score: 86 },
  { name: "좋은데이", price: 1100, sale: false, score: 92 },
  { name: "진로", price: 1150, sale: true, score: 80 },
  { name: "금복주", price: 960, sale: false, score: 60 },
  { name: "참이슬", price: 1250, sale: true, score: 46 },
];

//점수가 80점인 소주 찾기
{
  const result = sojus.find((soju) => soju.score === 80);
  console.log(result.name);
}

//여러 소주 중 판매중인 소주를 찾아 새로운 배열로 만들기
{
  const result = sojus.filter((item) => item.sale);
  console.log(result);
  const result2 = sojus.filter((item) => !item.sale);
  console.log(result2);
}

//점수만 있는 새로운 배열 만들기
{
  const result = sojus.map((item) => item.score);
  console.log(result);
}

//50보다 작은 점수를 가진 소주가 있는지 확인
{
  const result = sojus.some((item) => item.score < 50);
  console.log(result);
}

{
  const result = sojus.find((item) => item.score < 50);
  console.log(result);
}

//평균가격 구하기
{
  const result = sojus.reduce((a, b) => {
    return a + b.price;
  }, 0);

  console.log(result / sojus.length);
}

//점수가 낮은 순으로 ...
{
  const result = sojus
    .map((item) => item.score)
    .sort((a, b) => a - b)
    .join();

  console.log(result);
}
