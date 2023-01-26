const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', event => {
    event.target.style.color = '#ff6202';
  });
  
  link.addEventListener('mouseleave', event => {
    event.target.style.color = 'white';
  });
});

const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', function(){
    burger.classList.toggle('open');
    links.classList.toggle('show-links');
});
