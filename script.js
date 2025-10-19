// show current year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  })
});

// simple contact form handling
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Message sent (demo). Integrate EmailJS or backend to actually send it.');
    form.reset();
  })
}
