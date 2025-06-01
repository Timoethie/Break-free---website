document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const cx = rect.width / 2;
      const cy = rect.height / 2;
  
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
  
      const maxAngle = 15;
  
      el.style.transform = `rotateX(${-dy * maxAngle}deg) rotateY(${dx * maxAngle}deg) translateZ(30px) scale(1.05)`;
    });
  
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)';
    });
  });
  