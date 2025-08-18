  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.9)`;
  }

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

    // ✅ Change to random color & pause animation on hover
    bubble.addEventListener("mouseenter", () => {
      bubble.style.background = getRandomColor();
      bubble.style.animationPlayState = "paused";
    });

    // ✅ Resume animation & reset color when mouse leaves
    bubble.addEventListener("mouseleave", () => {
      bubble.style.background = "rgba(255, 182, 193, 0.8)"; // Default Pink
      bubble.style.animationPlayState = "running";
    });

    document.body.appendChild(bubble);

    // Remove after animation ends
    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  // Create bubbles every 450ms
  setInterval(createBubble, 450);
