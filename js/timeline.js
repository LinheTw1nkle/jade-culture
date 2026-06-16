const items = document.querySelectorAll('.timeline-item');

function reveal(){
  const trigger = window.innerHeight * 0.85;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if(top < trigger){
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();