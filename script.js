const staticImg = 'Media/Button Paper.png';

const buttons = document.querySelectorAll('.image-btn');

buttons.forEach(button => {
  const img = button.querySelector('img');
  const hoverGif = button.dataset.hover;

  button.addEventListener('mouseenter', () => {
    img.src = hoverGif;
  });

  button.addEventListener('mouseleave', () => {
    img.src = staticImg;
  });
});
