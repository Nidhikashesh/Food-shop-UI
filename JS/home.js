// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// NAVBAR SHADOW

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
  }
  else{
    navbar.style.boxShadow = "none";
  }

});


// TESTIMONIAL SCROLL

const testimonialGrid = document.querySelector(".testimonial-grid");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

rightBtn.addEventListener("click", () => {

  testimonialGrid.scrollBy({
    left: 380,
    behavior: "smooth"
  });

});

leftBtn.addEventListener("click", () => {

  testimonialGrid.scrollBy({
    left: -380,
    behavior: "smooth"
  });

});