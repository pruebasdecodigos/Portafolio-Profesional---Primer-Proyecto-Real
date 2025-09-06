document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); 
        obs.unobserve(entry.target); // comentario echo para saber que esta etiqueta se puede quitar si se quiere que cada vez que se haga scroll se vuelva a activar la animación
      }
    });
  }, { threshold: 0.2 }); 

  cards.forEach(card => observer.observe(card));
});



const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // se activa solo una vez
    }
  });
}, { threshold: 0.2 });

hiddenElements.forEach(el => observer.observe(el));



//asdad

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");  // abre/cierra menú
        hamburger.classList.toggle("toggle"); // anima la X
    });
