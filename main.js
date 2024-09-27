const smoothScroll = () => {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
};

function revealOnScroll() {
  const elements = document.querySelectorAll('.container');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const viewPortHeight = window.innerHeight - 100;

    if (elementPosition < viewPortHeight) {
      element.classList.add('show');
    }
  });
}

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('load', () => {
  smoothScroll();
  revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);
