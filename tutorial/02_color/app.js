const bg = ["orange", "lightblue", "red", "aqua", "yellow", "lightgreen"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const bgBtn = document.getElementById("bgBtn");
const hexBtn = document.getElementById("hexBtn");
const color = document.querySelector(".color");

bgBtn.addEventListener("click", () => {
  const randomBgNum = Math.floor(Math.random() * bg.length);
  console.log(bg[randomBgNum]);
  document.body.style.backgroundColor = bg[randomBgNum];
  color.textContent = bg[randomBgNum];
});

function getHexNum() {
  return Math.floor(Math.random() * hex.length);
}

hexBtn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getHexNum()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
