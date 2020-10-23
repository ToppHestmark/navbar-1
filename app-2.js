const navSlide = () => {
  const burger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener('click', () => {

    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    });

    burger.classList.toggle('toggle__nav-burger');
  })
}
navSlide()
