// NAVBAR TOGGLE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if (toggle && nav) {

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    // ADD THIS: change icon ☰ ↔ ✖
    if (nav.classList.contains("active")) {
      toggle.innerHTML = "✖";
    } else {
      toggle.innerHTML = "☰";
    }
  });

  // AUTO CLOSE MENU
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");

      // reset icon back to hamburger
      toggle.innerHTML = "☰";
    });
  });

}
