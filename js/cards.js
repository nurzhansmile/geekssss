const defaultPhoto = "../image/user.jpg";
const defaultGif = "../image/defaultGif.gif";
const cardsWrap = document.querySelector(".cardsWrap");

const characters = new XMLHttpRequest();
characters.open("GET", "../data/data.json");
characters.setRequestHeader("Content-Type", "application/json");
characters.send();

characters.onload = () => {
  const data = JSON.parse(characters.response);
  data.forEach((dragon) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const abilities = dragon.abilities.join("<br> ");

    card.innerHTML = `
    
        <div class="cardPhoto">
        <img class="photo static" src="${dragon.photo || defaultPhoto}" >
        </div>
        <div class="cardInfo">
            <h4>${dragon.name}</h4>
            <span>${abilities}</span>
        </div>
 
    `;
    cardsWrap.append(card);
  });
};

const hiccup = new XMLHttpRequest
hiccup.open('GET', '../data/any.json')
hiccup.setRequestHeader('Content-type', 'application/json')
hiccup.send()

hiccup.onload = ()=>{
    console.log(JSON.parse(hiccup.response));
    
}