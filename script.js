const button = document.querySelector('.image-btn');
const img = document.getElementById('button-img');

const staticImg = 'Button Paper.png';
const animatedGif = 'ButtonHover2.gif';

button.addEventListener('mouseenter', () => {
   img.src = animatedGif;});

 button.addEventListener('mouseleave', () => {
   img.src = staticImg;
  });



