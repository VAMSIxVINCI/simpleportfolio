document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully! (demo)");
    form.reset();
  });
});

