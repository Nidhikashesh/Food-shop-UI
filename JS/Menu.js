
// MOBILE NAVBAR

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// FILTER DROPDOWN

const filterBtn = document.getElementById("filterBtn");
const filterDropdown = document.getElementById("filterDropdown");

filterBtn.addEventListener("click", () => {
  filterDropdown.style.display =
    filterDropdown.style.display === "block"
      ? "none"
      : "block";
});

