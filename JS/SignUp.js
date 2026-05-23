const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Account Created Successfully!✅ You can Login Now!");
  
  form.reset();
  window.location.href = "../index.html";
  

});