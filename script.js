document.getElementById("register-link").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "none";
  document.getElementById("registration-container").style.display = "block";
});

document.getElementById("login-link").addEventListener("click", function () {
  document.getElementById("registration-container").style.display = "none";
  document.querySelector(".form-container").style.display = "block";
});
