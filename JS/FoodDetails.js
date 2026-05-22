feather.replace();

/* Quantity */

const plusBtn =
  document.querySelector(".plus");

const minusBtn =
  document.querySelector(".minus");

const quantity =
  document.getElementById("quantity");

let count = 1;

plusBtn.addEventListener("click", () => {

  count++;

  quantity.innerText = count;

});

minusBtn.addEventListener("click", () => {

  if(count > 1){

    count--;

    quantity.innerText = count;

  }

});

/* Image Change */

const mainImage =
  document.querySelector(".main-food-img");

const smallImages =
  document.querySelectorAll(".small-images img");

smallImages.forEach((img) => {

  img.addEventListener("click", () => {

    mainImage.src = img.src;

  });

});

/* Popup */

const popup =
  document.getElementById("popup");

const cartBtn =
  document.querySelector(".cart-btn");

const closePopup =
  document.getElementById("closePopup");

cartBtn.addEventListener("click", () => {

  popup.style.display = "flex";

});

closePopup.addEventListener("click", () => {

  popup.style.display = "none";

});