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
  element.oninput = async () => {
    try {
      const response = await fetch(`../data/converter.json`);
      const data = await response.json();

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
    } catch (e) {
      console.log(e);
    }
  };
};

converter(somInput, usdInput, euroInput);
converter(usdInput, somInput, euroInput);
converter(euroInput, somInput, usdInput);

const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const cardBlock = document.querySelector(".card");
cardId = 1;

async function getTodosById() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${cardId}`,
    );
    const data = await response.json();
    console.log(data, "lll");

    if (cardId > 10) {
      cardId = 1;
    } else if (cardId < 1) {
      cardId = 10;
    }

    const { title, id, completed } = data;
    cardBlock.innerHTML = `
        <span>${title}</span>
        <span>${completed}</span>
        <p>${id}</p>
      `;
  } catch (e) {
    console.log(e);
  }
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

async function postsGet() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data, "ssssss");
  } catch (e) {
    console.log(e);
  }
}
postsGet();

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

const API_KEY = "291aa3950880603684e43c6cc36aed88";
const BASE_API = "https://api.openweathermap.org/data/2.5/weather";

searchBtn.onclick = async () => {
  try {
    if (searchInput.value !== "") {
      const response = await fetch(
        `${BASE_API}?q=${searchInput.value}&units=metric&lang=ru&appid=${API_KEY}`,
      );
      const data = await response.json();
      if (data.name) {
        city.innerHTML = data.name;
        city.style.color = "white";
        temp.innerHTML = Math.round(data.main.temp) + "&deg;C";
      } else {
        city.innerHTML = "Город с таким названием не найден";
        temp.innerHTML = "";
        city.style.color = "red";
      }
      searchInput.value = "";
    } else {
      city.innerHTML = "Введите название города";
      temp.innerHTML = "";
      city.style.color = "red";
    }
  } catch (e) {
    console.log(e);
  }
};
