const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const checker = document.querySelector("#phone_result");

const validatePhoneNumber = /\+996 [75296]\d{2} \d{2}-\d{2}-\d{2}/;

phoneButton.onclick = () => {
  if (validatePhoneNumber.test(phoneInput.value)) {
    console.log(phoneInput.value);
    
    checker.textContent = "OK, Good!";
    checker.style.color = "green";
  } else {
    checker.textContent = "Error!";
    checker.style.color = "red";
  }
};

// let num = 0;

// const count = () => {
//   num++;
//   console.log(num);
//   if (num < 500) {
//     requestAnimationFrame(count);
//   }
// };
// count();

setTimeout(()=>{
    console.log("ok");

}, 2000)

const interval = setInterval(()=>{
    console.log("ok");
 
}, 2000)