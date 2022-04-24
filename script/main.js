//Menu hamburguer
const body = document.querySelector("body");
const hamburguerMenu = document.querySelector(".menu-btn");

hamburguerMenu.addEventListener("click", () => {
  body.classList.toggle("activeUl");
});

//Bookmark btn

const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmarked");
});

//Click card modal

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("backProject")) {
    body.classList.add("open-modal");
  }
  if (e.target.classList.contains("close-modal")) {
    body.classList.remove("open-modal");
    removeOpen()
  }
});

// 
const cardsModal = document.querySelectorAll(".card-modal");
let n = 0;
cardsModal.forEach((card, i) => {
  const removeOpen = () => {
    cardsModal.forEach((card, i) => {
      if (card.classList.contains("card-modal-open")) {
        card.classList.remove("card-modal-open");
      }
    });
  };
  card.addEventListener("click", (e) => {
    removeOpen()
    if(!card.classList.contains('firt')){
        card.classList.toggle("card-modal-open");
    }
    console.log(n);
  });
});
