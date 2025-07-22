// Simple fade-in on scroll
const sections = document.querySelectorAll("section");

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  appearOnScroll.observe(section);
});
