const blocks = document.querySelector(".blocks");
const refreshBtn = document.querySelector(".refresh");
const blocksArray = [1, 2, 3, 4];
blocksArray.forEach((element) => {
  const block = document.createElement("div");
  block.classList.add("block");
  blocks.appendChild(block);
});

const blockNum = document.querySelectorAll(".block");
refreshBtn.onclick = () => {
  blockNum.forEach((el) => {
    const num = Math.floor(Math.random() * 10);
    console.log(num);

    el.textContent = num;
  });
};
