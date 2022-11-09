/* Nav */
const comingSoonBtn = document.querySelector("[data-coming-soon]");
const emailInput = document.querySelector("[data-email-input]");

comingSoonBtn.addEventListener("click", () => {
  console.log("Heyyyyy");
  emailInput.focus();
});

/* Transitions on scroll */
const mainobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry);
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
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  slidesOffsetAfter: 0,

  /*  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  }, */

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  /* scrollbar: {
    el: ".swiper-scrollbar",
  }, */
});

/* const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide-item");

setInterval(() => {
  let flag = false;
  let i = 0;
  while (!flag) {
    if (i === slides.length - 1) {
      if (slides[i].classList.contains("block")) {
        slides[i].classList.remove("block");
        slides[i].classList.add("hidden");

        slides[0].classList.remove("hidden");
        slides[0].classList.add("block");
        flag = true;
      }
    } else {
      if (slides[i].classList.contains("block")) {
        slides[i].classList.remove("block");
        slides[i].classList.add("hidden");
        slides[i + 1].classList.remove("hidden");
        slides[i + 1].classList.add("block");
        flag = true;
      }
    }
    i++;
  }
}, 8000);
 */
