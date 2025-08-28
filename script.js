// Hamburger menü
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Parallax hero
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});

// Animáció trigger scrollra
const animElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.2 });

animElements.forEach(el => observer.observe(el));
