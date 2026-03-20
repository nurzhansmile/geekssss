const defaultPhoto = "../image/user.jpg";
const cardsWrap = document.querySelector(".cardsWrap");

const getPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=8",
    );
    const data = await response.json();

    data.forEach((dragon) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const abilities = dragon.body;
      card.innerHTML = `
    
        <div class="cardPhoto">
        <img class="photo static" src="${dragon.photo || defaultPhoto}" >
        </div>
        <div class="cardInfo">
            <h4>${dragon.title}</h4>
            <span>${abilities}</span>
        </div>
 
    `;
      cardsWrap.append(card);
    });
  } catch (e) {
    console.log(e);
  }
};
getPosts();

const hiccupInfoGet = async () => {
  try {
    const response = await fetch("../data/any.json");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

hiccupInfoGet();
