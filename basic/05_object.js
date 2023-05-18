// Object 객체
// -속성과 기능-
//phone의 상태:color.size
//phone의 행동:ringing,taking photo,playing music
//형식{키:값}

//객체의 종류
//-내장객체:문자(string),날짜(date),배열(array)수학(math) 등
//-브라우저 객체 모델(BOM):window,screen,location,history,navigator
//-문서 객체 모델(DOM):html 문서 구조

const user = {
  name: "Picaso",
  age: 30,
  email: "Picaso@gmail.com",
  works: [
    { id: 1, title: "게르니카", price: 1000, like: 50 },
    { id: 2, title: "아비뇽의 처녀들", price: 3000, like: 80 },
    { id: 1, title: "우는 여인", price: 5000, like: 200 },
  ],
  login: function () {
    console.log("입장하였습니다.");
  },
  logout() {
    console.log("안녕히가세요.");
  },

  goodjob() {
    console.log("피카소의 대표작");
    this.works.forEach((work) => {
      console.log(
        `${work.id},${work.title},${work.price}원, 좋아요${work.like}`
      );
    });
  },
};
console.log(user.age);
user.age = 45;
console.log(user.age);

user.login();
user.logout();
user.goodjob();
