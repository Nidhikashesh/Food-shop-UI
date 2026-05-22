feather.replace();

/* Payment Select */

const paymentCards =
  document.querySelectorAll(".payment-card");

paymentCards.forEach((card) => {

  card.addEventListener("click", () => {

    paymentCards.forEach((item) => {
      item.classList.remove("active");
    });

    card.classList.add("active");

  });

});

/* Popup */

const placeOrderBtn =
  document.querySelector(".place-order-btn");

const successPopup =
  document.getElementById("successPopup");

const closePopup =
  document.getElementById("closePopup");

placeOrderBtn.addEventListener("click", () => {

  successPopup.style.display = "flex";

});

closePopup.addEventListener("click", () => {

  successPopup.style.display = "none";

});