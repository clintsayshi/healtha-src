const mainobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
    } else {
      entry.target.classList.remove("show-section");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide-section");

hiddenElements.forEach((element) => mainobserver.observe(element));
