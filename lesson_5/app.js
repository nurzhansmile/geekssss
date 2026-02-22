 const starsContainer = document.querySelector(".star-container .stars");
const rates = [1, 2, 3, 4, 5];
const rateValue = document.querySelector(".rating-value");
starsContainer.innerHTML = "";
// for(const rate of rates){
// const star = document.createElement('div')
// // star.className("fa fa-heart")
// star.classList.add("fa", "fa-heart")
// // star.setAttribute("fa", "fa fa-tree")
// starsContainer.appendChild(star)
// }

const starsHtml = rates
  .map(
    (rate) =>
      <div class="fa fa-heart" id="star-${rate}" data-rate="${rate}"> </div>,
  )
  .join("");
starsContainer.innerHTML = starsHtml;

const stars = document.querySelectorAll(".fa.fa-heart");
stars.forEach((star) => {
  star.onclick = (event) => {
    const userRate = Number(event.target.dataset.rate);
    rateValue.dataset.value = userRate;

    stars.forEach((s) => {
      if (userRate >= s.dataset.rate) {
        s.classList.add("checked");
      } else {
        s.classList.remove("checked");
      }
    });

    if(userRate === 5){
    blowConfetti();
    }

    // console.log(event.target.getAttribute("data-rate"));
  };
});

function blowConfetti() {
  confetti({
    particleCount: 200,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    scalar: 4
  });

  confetti({
    particleCount: 250,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    scalar:4
  });
}
