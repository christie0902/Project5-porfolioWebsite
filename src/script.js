const burgerIcon = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".close-icon");

burgerIcon.addEventListener("click", (e) => {
  mobileMenu.classList.add("mobile-menu--active");
});

closeIcon.addEventListener("click", (e) => {
  mobileMenu.classList.remove("mobile-menu--active");
});

// add smooth scrolling behavior

let navLink = document.querySelectorAll(".nav a");
navLink.forEach((link) => {
    link.onclick = function (e) {
    // Prevent scrolling if the hash value is blank
    e.preventDefault();
    let destination = document.querySelector(this.hash);
    destination.scrollIntoView({
      behavior: "smooth",
    });
  };
});
