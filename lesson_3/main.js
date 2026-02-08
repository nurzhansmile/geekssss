// const nextBtn = document.querySelector(".arrow.right-arrow");
// const backBtn = document.querySelector(".arrow.left-arrow");

// let slideActiveIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const indicators = document.querySelectorAll(".nav-item");

// nextBtn.onclick = () => {
//   slideActiveIndex++;

//   if (slideActiveIndex >= slides.length) {
//     slideActiveIndex = 0;
//   }
//   openSlide(slideActiveIndex);
//   selectIndicator(slideActiveIndex);
// };
// backBtn.onclick = () => {
//   slideActiveIndex--;
//
//   if (slideActiveIndex < 0) {
//     slideActiveIndex = slides.length - 1;
//   }
//   openSlide(slideActiveIndex);
//   selectIndicator(slideActiveIndex);
// };
// function openSlide(index) {
//   const activeSlide = document.querySelector(".slide.active");
//   activeSlide.classList.remove("active");
//   const newSlide = slides[index];
//   newSlide.classList.add("active");
//   updateBg()
// }

// function selectIndicator(index) {
//   const activeNav = document.querySelector(".nav-item.active");
//   activeNav.classList.remove("active");
//   const newNav = indicators[index];
//   newNav.classList.add("active");
// }
// function updateBg(index) {
//   const activeSlide = document.querySelector(".slide.active");
//   const bgImg = activeSlide.style.backgroundImage;
//   document.body.style.backgroundImage = bgImg
// }
// for (let i = 0; i < indicators.length; i++) {
//   const nav = indicators[i];
//   nav.onclick = () => {
//     slideActiveIndex = i;
//     openSlide(slideActiveIndex);
//     selectIndicator(slideActiveIndex);
//   };
// }
// updateBg()

// const slide = document.querySelector('.slide')
const slides = document.querySelectorAll(".slide");

// slide.onclick = ()=>{
// openSlide()
// }
// function openSlide(){
//  const slideActive = document.querySelector(".slide.active")
//     slideActive.classList.remove("active")
//     const newSlide = slides[index]
//     newSlide.classList.add ("active")
// }
for (let i = 0; i < slides.length; i++) {
  const nav = slides[i];
  nav.onclick = () => {
 const slideActive = document.querySelector(".slide.active")
    slideActive.classList.remove("active")
    const newSlide = slides[i]
    newSlide.classList.add ("active")
};
}
