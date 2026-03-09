const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#btn-get");
const closeModalBtn = document.querySelector(".modal_close");

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

openModalBtn.onclick = openModal;
closeModalBtn.onclick = closeModal;
modal.onclick = (e) => {
  if (e.target === modal) closeModal();
};

setTimeout(()=>{
openModal()
},10000)

const scroll = function() {
    if(window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight){
        openModal()
        document.removeEventListener("scroll", scroll)
    }
}

document.addEventListener('scroll', scroll)