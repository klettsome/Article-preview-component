const btnShare = document.querySelector('.btn-share');
const socialLinks = document.querySelector('.share-container');

btnShare.addEventListener('click', function () {
  socialLinks.classList.toggle('fade-out');
  socialLinks.classList.toggle('fade-in');
});
