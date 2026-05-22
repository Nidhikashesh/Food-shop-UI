// Login Form

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Login Successful!");
    form.reset();
    // Redirect to Home Page
    window.location.href = "Admin.html";
});


// Hover Animation For Buttons

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transition = "0.3s";
    });

});