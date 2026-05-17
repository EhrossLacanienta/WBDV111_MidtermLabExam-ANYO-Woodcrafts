// ===== NAVBAR TOGGLE =====
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    toggle.textContent =
      nav.classList.contains("active") ? "✖" : "☰";

  });

  // ===== AUTO CLOSE MENU =====
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("active");
      toggle.textContent = "☰";

    });

  });

}
