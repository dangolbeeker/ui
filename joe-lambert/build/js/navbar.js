const handleNavbar = (height, scrollDistance) => {
  const navbar = document.getElementById('fixed-navbar');
  if (scrollDistance > height) navbar.classList.remove('hidden');
  if (scrollDistance < height / 2) navbar.classList.add('hidden');
  console.log('callllllllling ');
};

window.addEventListener('DOMContentLoaded', () => {
  const height = window.innerHeight;
  document.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    window.requestAnimationFrame(() => handleNavbar(height, scrollDistance));
  });
});
