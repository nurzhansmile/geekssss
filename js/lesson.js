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

// setTimeout(()=>{
//     console.log("ok");

// }, 2000)

// const interval = setInterval(()=>{
//     console.log("ok");

// }, 2000)
const tabContentBlokcs = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentBlockParent = document.querySelector(".tab_contents_block");


function hideContent() {
  tabContentBlokcs.forEach((tabBlock) => {
    tabBlock.style.display = "none";
  });
  tabContentItems.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
}

function showContent(i = 0) {
  tabContentBlokcs[i].style.display = "block";
  tabContentItems[i].classList.add("tab_content_item_active");
}

hideContent();
showContent();

const autoSlider = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > tabContentBlokcs.length-1) {
      i = 0;
    }
    hideContent();
    showContent(i);
    
  }, 3000);
};

tabContentBlockParent.onclick = (e) => {
  if (e.target.classList.contains("tab_content_item")) {
    tabContentItems.forEach((tabItem, tabIndex) => {
      if (e.target === tabItem) {
        hideContent();
        showContent(tabIndex);
      }
    });
  }
};

autoSlider();
