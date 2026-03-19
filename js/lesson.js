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
    if (i > tabContentBlokcs.length - 1) {
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

const innerConverter = document.querySelector(".inner_converter");
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const euroInput = document.querySelector("#eur  ");

const converter = (element, targetElement, targetElement2) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const data = JSON.parse(request.response);
      console.log(data);

      if (element.id === "som") {
        targetElement.value = (element.value / data.usd).toFixed(2);
        targetElement2.value = (element.value / data.euro).toFixed(2);
      }

      if (element.id === "usd") {
        targetElement.value = (element.value * data.usd).toFixed(2);
        targetElement2.value = (element.value * 1.15).toFixed(2);
      }
      if (element.id === "euro") {
        targetElement.value = (element.value * data.euro).toFixed(2);
        targetElement2.value = (element.value * 0.87).toFixed(2);
      }

      if (element.value === "") {
        targetElement.value = "";
      }
      if (element.value === "") {
        targetElement2.value = "";
      }
    };
  };
};

converter(somInput, usdInput, euroInput);
converter(usdInput, somInput, euroInput);
converter(euroInput, somInput, usdInput);

const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const cardBlock = document.querySelector(".card");
cardId = 1;

function getTodosById() {
  if (cardId > 10) {
    cardId = 1;
  } else if (cardId < 1) {
    cardId = 10;
  }
  fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      const { title, id, completed } = data;
      cardBlock.innerHTML = `
        <span>${title}</span>
        <span>${completed}</span>
        <p>${id}</p>
      `;
    });
}

getTodosById();

btnNext.onclick = () => {
  cardId++;
  getTodosById();
};
btnPrev.onclick = () => {
  cardId--;
  getTodosById();
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
