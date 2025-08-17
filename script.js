function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size between 20px and 80px
    const size = Math.random() * 60 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // Random horizontal position
    bubble.style.left = Math.random() * 100 + '%';

    // Random animation duration (5s – 10s)
    const duration = Math.random() * 5 + 5;
    bubble.style.animationDuration = duration + 's';

    document.body.appendChild(bubble);

    // Remove after animation ends
    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  // Create new bubble every 450ms
  setInterval(createBubble, 450);

