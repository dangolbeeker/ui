const handleNavbar = directive => {
  const navbar = document.getElementById('fixed-navbar');
  if (directive === 'show') navbar.classList.remove('hidden');
  if (directive === 'hide') navbar.classList.add('hidden');
};

window.addEventListener('DOMContentLoaded', event => {
  const height = window.innerHeight;
  document.addEventListener('scroll', event => {
    const scrollDistance = window.scrollY;
    window.requestAnimationFrame(event => {
      if (scrollDistance >= height) {
        handleNavbar('show');
      }
      if (scrollDistance === 0) {
        handleNavbar('hide');
      }
    });
  });
});
