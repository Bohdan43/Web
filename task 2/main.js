document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const menu = document.querySelector('nav ul');

  burgerIcon.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
  });

  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideBurgerIcon = burgerIcon.contains(event.target);
    
    if (!isClickInsideMenu && !isClickInsideBurgerIcon) {
      menu.classList.remove('menu-active');
    }
  });
});
