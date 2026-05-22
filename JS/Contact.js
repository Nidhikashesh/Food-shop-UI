// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// CONTACT FORM ALERT

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();
});