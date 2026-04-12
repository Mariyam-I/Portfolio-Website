// ============================================================
// MODERN PORTFOLIO JS (Reveal, Smooth Scroll, & Typing)
// ============================================================

// 1. Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1, // Triggers when 10% of element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active"); // Add active class to reveal
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// 2. Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// 3. Dynamic Typing Effect for Hero Subtitle
const typingTarget = document.querySelector(".hero-content p");
const textToType =
  "Trained Java Full Stack Developer | Bridging Backend Logic with Frontend Creativity";
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typingTarget.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 45); // Adjust speed (ms) here
  }
}

// Start typing after a short delay once the window loads
window.addEventListener("DOMContentLoaded", () => {
  if (typingTarget) {
    typingTarget.textContent = ""; // Clear existing static text
    setTimeout(typeWriter, 500); // Initial delay before typing starts
  }
});
