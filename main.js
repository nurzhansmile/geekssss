// const p = document.querySelector("#main_text");
// console.dir(p);
// p.textContent = "Geeks";

// // const myName = document.querySelector("#myName");
// const myNameText = document.querySelector('#myNameText')

// myNameText.innerHTML = "<button>Bakytova</button>";

//  p.style.color = "red"

//  const group = document.querySelector('.group')

//  console.log(group);

//  group.classList.add("end")
//  group.classList.remove("end")

//  group.classList.add("start")

// const btn = document.querySelector("button");
// console.log(btn);

// btn.addEventListener("click", function () {
//   console.log("nurzhan");
//   btn.style.background = "green";
// });

const clickerWrap = document.querySelector(".clicker");
const btnMinus = document.querySelector(".minus");
const btnPlus = document.querySelector(".plus");
const bValue = document.querySelector("b");
const resetBtn = document.querySelector(".reset");
let value = 0;

resetBtn.addEventListener("click", function () {
  value = 0;
  bValue.innerText = value;
  if (value === 0) {
    clickerWrap.style.background = "yellow";
  }
});
btnMinus.addEventListener("click", function () {
  value--;
  bValue.innerText = value;
  if (value < 0) {
    clickerWrap.style.background = "red";
  }else if (value === 0) {
    clickerWrap.style.background = "yellow";
  }
});

btnPlus.addEventListener("click", function () {
  value++;
  bValue.innerText = value;
  if (value > 0) {
    clickerWrap.style.background = "green";
  }else if (value === 0) {
    clickerWrap.style.background = "yellow";
  }
});

const btnRed = document.querySelector(".red");
const btnYellow = document.querySelector(".yellow");
const btnGreen = document.querySelector(".green");
const textTraffic = document.querySelector(".textTraffic");

btnRed.style.background = "red";
btnRed.style.borderColor = "red";

btnYellow.style.background = "yellow";
btnYellow.style.borderColor = "yellow";

btnGreen.style.background = "green";
btnGreen.style.borderColor = "green";

btnRed.addEventListener("click", function () {
  textTraffic.textContent = "Stop!!!";
  textTraffic.style.color = "red";
});

btnYellow.addEventListener("click", function () {
  textTraffic.textContent = "Ожидание✋";
  textTraffic.style.color = "yellow";
});
btnGreen.addEventListener("click", function () {
  textTraffic.textContent = "Идти✅";
  textTraffic.style.color = "green";
});
