//Menu hamburguer
const body = document.querySelector('body')
const hamburguerMenu = document.querySelector('.menu-btn')

hamburguerMenu.addEventListener('click', ()=>{
    body.classList.toggle('activeUl')
})