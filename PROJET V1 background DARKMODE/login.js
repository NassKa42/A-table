let fullname = document.getElementById("username");
let address = document.getElementById("password");
let contactForm = document.getElementById("form");

contactForm.addEventListener("submit", function (e) {
  let messageName = [];
  let messageAddress = [];
  if (
    (fullname.value == "admin" && address.value == "9874")
  ) {
    sessionStorage.setItem("token", "connected")
    e.preventDefault();
    window.location.assign("admin.html");
  }
  else if (fullname.value && address.value) {
    alert("Mauvaises informations")
    e.preventDefault();
    window.location.assign("https://www.youtube.com/watch?v=7PYUhpqM0cY");
  }
});