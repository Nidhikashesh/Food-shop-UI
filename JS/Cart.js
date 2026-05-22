// Quantity Buttons

const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let count =
      btn.parentElement.querySelector("span");

    count.innerText = parseInt(count.innerText) + 1;
  });
});

minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    let count =
      btn.parentElement.querySelector("span");

    if (parseInt(count.innerText) > 1) {
      count.innerText =
        parseInt(count.innerText) - 1;
    }
  });
});

// Remove Item

const removeBtns =
  document.querySelectorAll(".remove-btn");

removeBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    btn.parentElement.style.transform =
      "translateX(100px)";
    btn.parentElement.style.opacity = "0";

    setTimeout(() => {
      btn.parentElement.remove();
    }, 400);
  });
});