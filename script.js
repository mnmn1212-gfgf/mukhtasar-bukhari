const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach((item) => observer.observe(item));

const bookFrame = document.getElementById('bookFrame');
if (bookFrame) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * -8;
    bookFrame.style.transform = `rotateY(${x - 6}deg) rotateX(${y + 2}deg)`;
  });

  window.addEventListener('mouseleave', () => {
    bookFrame.style.transform = 'rotateY(-6deg) rotateX(2deg)';
  });
}
