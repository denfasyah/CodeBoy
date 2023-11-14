  document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.getElementById('toggleCheckbox');
    const navbarNavAltMarkup = document.getElementById('navbarNavAltMarkup');

    toggleCheckbox.addEventListener('change', function () {
      navbarNavAltMarkup.classList.toggle('show');
    });
  });
