function myFunc() {
  console.log("안녕하세요");
}
myFunc();
const sayHello = function () {
  console.log("반갑습니다");
};
sayHello();

function printMsg(message) {
  console.log(message);
}
printMsg("helloworld");
printMsg("helloEarth");

//기본 파라미터
function showInfo(title, name = "스티브잡스") {
  console.log(`${title} by ${name}`);
}

showInfo("게르니카", "피카소");
showInfo("우는 여인");

//rest 파라미터/스프레드 연산(...)
function printAll(...items) {
  for (const item of items) {
    console.log(item);
  }
}

printAll("봄", "여름", "가을", "겨울", "안녕");

//scope

let movie = "하하하";
function paintMovie() {
  let myMovie = "생활의 발견";
  console.log(movie);
  console.log(myMovie);
}
paintMovie();

//callback function

const call = function (myName, printPicaso, printJobs) {
  if (myName === "Picaso") {
    printPicaso();
  } else {
    printJobs();
  }
};

const printPicaso = function () {
  console.log("I am Picaso");
};

const printJobs = function () {
  console.log("I am Jobs");
};

call("jobs", printPicaso, printJobs);

//return
function plus(a, b) {
  return a + b;
}

const result = plus(10, 20);
console.log(result);

//Arrow function 화살표 함수

const add = function (a, b) {
  return a * b;
};

const add2 = (a, b) => a * b;

// function hello() {
//   console.log("안녕하세요");
//   console.log(this);
// }

const hello = () => {
  console.log("안녕하세요");
  console.log(this);
};
hello();
