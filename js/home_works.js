const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const checker = document.querySelector("#gmail_result");

const validateGmail = /\w{4,}@gmail\.com/;
gmailButton.onclick = () => {
  if (validateGmail.test(gmailInput.value)) {
    checker.textContent = "OK, Good!";
    checker.style.color = "green";
  } else {
    checker.textContent = "Error!";
    checker.style.color = "red";
  }
};

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
let posX = 0;
let posY = 0;

const maxWidth = parentBlock.clientWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.clientHeight - childBlock.offsetHeight;

const moveChildBlock = () => {
  if (posX < maxWidth && posY === 0) posX++;
  else if (posX >= maxWidth && posY <= maxHeight) posY++;
  else if (posY >= maxHeight && posX > 0) posX--;
  else if (posX === 0 && posY > 0) posY--;

  childBlock.style.left = `${posX}px`;
  childBlock.style.top = `${posY}px`;

  requestAnimationFrame(moveChildBlock);
};
moveChildBlock();

const secondsBlock = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
let sec = 0;
let timer;
startBtn.onclick = () => {
  timer = setInterval(() => {
    sec++;
    secondsBlock.textContent = sec;
  }, 1000);
  startBtn.disabled = true;
};
stopBtn.onclick = () => {
  clearInterval(timer);
  startBtn.disabled = false;
};
resetBtn.onclick = () => {
  clearInterval(timer);
  sec = 0;
  secondsBlock.textContent = 0;
  startBtn.disabled = false;
};
