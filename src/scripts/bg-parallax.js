if (document.body.clientWidth > 768) {
  const parallax = document.querySelector('.parallax');
  const layers = parallax.children;

  window.addEventListener('scroll', () => {

    Array.from(layers).forEach(layer => {
      const divisor = layer.dataset.speed;
      const offset = window.pageYOffset * divisor / 1000;

      layer.style.transform = `translateY(-${offset}%)`;
    })
  })
}