const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close')
const main = document.querySelector('.main-content')
const topB = document.querySelector("#top")


hamburgerIcon.addEventListener('click', (e)=>{
    e.stopPropagation() 
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click',() => {
    headerContent.classList.remove('menu-open')
})

topB.addEventListener('click',()=>{
    main.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});

window.addEventListener('click',() => {
    headerContent.classList.remove('menu-open')
})
// ----------------------
// for the scroll up arrow button

