feather.replace();

/* Modal */

const modal = document.getElementById("modal");

const addFoodBtn =
  document.getElementById("addFoodBtn");

const closeBtn =
  document.querySelector(".close-btn");

addFoodBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {

  if (e.target === modal) {
    modal.style.display = "none";
  }

});

