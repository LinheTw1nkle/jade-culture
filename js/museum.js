const wall = document.querySelector('.museum-wall');
const track = document.querySelector('.museum-track');

let isDown = false;
let startX;
let scrollLeft = 0;

/* 鼠标按住拖动 */
wall.addEventListener('mousedown', (e) => {
  isDown = true;
  wall.style.cursor = 'grabbing';

  startX = e.pageX;
  track.style.animationPlayState = 'paused';
});

wall.addEventListener('mouseup', () => {
  isDown = false;
  wall.style.cursor = 'grab';

  track.style.animationPlayState = 'running';
});

wall.addEventListener('mouseleave', () => {
  isDown = false;
  track.style.animationPlayState = 'running';
});

wall.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const move = e.pageX - startX;
  track.style.transform = `translateX(${move * 0.6}px)`;
});