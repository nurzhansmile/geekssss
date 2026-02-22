const mainWrap = document.querySelector(".mianWrap");

const passwordWrap = document.querySelector(".passwordWrap");
const refreshBtn = document.querySelector(".refresh");

const blocks = '<div class="blocks"></div>';
passwordWrap.innerHTML += blocks;
const blocksWrap = document.querySelector(".blocks");
const blocksArray = [1, 2, 3, 4];

blocksArray.forEach((block) => {
  block = '<div class="block"></div>';
  blocksWrap.innerHTML += block;
});
const blockNum = document.querySelectorAll(".block");
refreshBtn.onclick = () => {
  blockNum.forEach((el) => {
    const num = Math.floor(Math.random() * 10);
    // const randomNumArray = num.toString();
    // const randomNum = randomNumArray.split(",");
    // console.log(randomNum);
    el.textContent = num;
    console.log(el);
    
  });
};