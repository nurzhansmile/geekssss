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

const childBlock = document.querySelector(".child_block");
let left = 0;

const moveChildBlock = () => {
  if (left < 448) {
    left++;
    childBlock.style.left = `${left}px`;
    requestAnimationFrame(moveChildBlock);
  }
};
moveChildBlock();
