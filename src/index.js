import './styles.css';

const container = document.querySelector('.container');
const shifty = document.querySelector('#shifty');
const yes = document.querySelector('#yes');

shifty.addEventListener('click', () => {
  const { width: cWidth, height: cHeight } = container.getBoundingClientRect(),
    { width: bWidth, height: bHeight } = shifty.getBoundingClientRect(),
    i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
    j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

  shifty.style.left = i + 'px';
  shifty.style.top = j + 'px';
});

yes.addEventListener('click', () => {
  window.open(
    'https://www.eventbrite.co.uk/e/bootcamp-120-graduation-exhibition-tickets-390469172807',
    '_blank',
  );
});
