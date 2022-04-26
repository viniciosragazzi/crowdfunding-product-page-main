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

//open sucess modal function
const openSucessModal = () =>{
    body.classList.remove("open-modal-rewads");
    body.classList.add("open-modal-sucess");
}
//Click card modal

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("backProject")) {
    body.classList.add("open-modal-rewads");
  }
  if (e.target.classList.contains("close-modal")) {
    body.classList.remove("open-modal-rewads");
  }
  if (e.target.classList.contains("btn-selectRewards")) {
    body.classList.add("open-modal-sucess");
  }
  if (e.target.classList.contains("modalSucess-btn")) {
    body.classList.remove("open-modal-sucess");

  }

  if (e.target.classList.contains("button-continue")) {
    openSucessModal()
    removeOpen();
  }
});

//
const cardsModal = document.querySelectorAll(".card-modal");
let n = 0;
cardsModal.forEach((card, i) => {
  const removeOpen = () => {
    cardsModal.forEach((card, i) => {

        if (
          card.classList.contains("card-modal-open") ||
          card.classList.contains("card-modal-select")
        ) {
          card.classList.remove("card-modal-open");
          card.classList.remove("card-modal-select");
        }
      
    });
  };
  card.addEventListener("click", (e) => {
    removeOpen();
    if (!card.classList.contains("disabled")) {
    if (!card.classList.contains("firt")) {
      card.classList.toggle("card-modal-open");

    } else {
      card.classList.toggle("card-modal-select");
      openSucessModal()
    }
}
    console.log(n);
  });
});
