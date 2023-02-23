const toggler = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  navigation.classList.toggle('active');
});
