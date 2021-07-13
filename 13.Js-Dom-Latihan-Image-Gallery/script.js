const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', (e) => {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    setTimeout(() => {
      jumbo.classList.remove('fade');
    }, 500);
    jumbo.classList.add('fade');

    thumbs.forEach(thumb => {
      thumb.className = 'thumb';
    });
    e.target.classList.add('active');
  }
});