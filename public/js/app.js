/* Nav */
const menuBtn = document.querySelector("[data-nav-button]");
const navLinks = document.querySelector("[data-nav-links]");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    document.querySelector(".hamburger").classList.add("hidden");
    document.querySelector(".cross").classList.remove("hidden");
  } else {
    document.querySelector(".hamburger").classList.remove("hidden");
    document.querySelector(".cross").classList.add("hidden");
  }
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  document.querySelector(".hamburger").classList.remove("hidden");
  document.querySelector(".cross").classList.add("hidden");
});

/* Emailing list */
const comingSoonBtn = document.querySelector("[data-coming-button]");
const emailInput = document.querySelector("[data-email-input]");

comingSoonBtn.addEventListener("click", () => {
  emailInput.focus();
});

/* Transitions on scroll */
const mainobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
    } else {
      entry.target.classList.remove("show-section");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide-section");
hiddenElements.forEach((element) => mainobserver.observe(element));

/* Slider:Why HealthA */
const swiper001 = new Swiper(".swiper001", {
  // parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  slidesOffsetAfter: 0,

  // navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Slider:About us */
var swiper002 = new Swiper(".mySwiper002", {
  // parameters
  speed: 2500,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  lazy: true,
  slidesPerView: 1,
  slidesOffsetAfter: 0,

  // pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
