const burgerIcon = document.querySelector('.fa-bars')
const mobileMenu = document.querySelector('.mobile-menu')
const closeIcon = document.querySelector('.close-icon')

burgerIcon.addEventListener("click", (e) => {
    mobileMenu.classList.add('mobile-menu--active');
})

closeIcon.addEventListener("click", (e) => {
    mobileMenu.classList.remove('mobile-menu--active');
})