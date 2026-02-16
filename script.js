document.addEventListener("DOMContentLoaded", () => {

  // Sticky Header
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
  });

  // ScrollReveal
  ScrollReveal({
    distance: "50px",
    duration: 1500,
    delay: 200
  });

  ScrollReveal().reveal(".text, .heading", { origin: "top" });
  ScrollReveal().reveal(".form-container, .about-img", { origin: "left" });
  ScrollReveal().reveal(".Products-container .box", { origin: "bottom" });

  // Order form alert
  const orderForm = document.querySelector(".form-container form");
  orderForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("🎉 Order placed successfully!");
    orderForm.reset();
  });

});
