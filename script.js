
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size between 10px and 40px
    const size = Math.random() * 60 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    bubble.style.left = Math.random() * 100 + '%';

    // Random animation duration between 5s and 10s
    const duration = Math.random() * 5 + 5;
    bubble.style.animationDuration = duration + 's';


    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  setInterval(createBubble, 450);