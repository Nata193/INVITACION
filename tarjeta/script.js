
  // 🎵 Reproducir o pausar música
function toggleMusic() {
  const music = document.getElementById('bg-music');
  music.paused ? music.play() : music.pause();
}

// ✨ Animaciones al hacer scroll (secciones)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// 🎞️ Carrusel de imágenes con autoplay + puntitos de navegación
const gallery = document.getElementById('gallery');
const slides = gallery.querySelectorAll('a');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
let isHovered = false;

// 🟢 NUEVO: Detectar ancho real del slide
function getSlideWidth() {
  return slides[0]?.offsetWidth || 0;
}

// Crear puntitos de navegación
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

function nextSlide() {
  if (isHovered) return;
  currentIndex = (currentIndex + 1) % slides.length;
  const slideWidth = getSlideWidth();
  gallery.scrollTo({
    left: slideWidth * currentIndex,
    behavior: 'smooth'
  });
  updateDots(currentIndex);
}

// Detener autoplay al pasar el mouse
gallery.addEventListener('mouseenter', () => isHovered = true);
gallery.addEventListener('mouseleave', () => isHovered = false);

// Permitir clic en los puntitos para cambiar de slide
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    const slideWidth = getSlideWidth();
    gallery.scrollTo({
      left: slideWidth * currentIndex,
      behavior: 'smooth'
    });
    updateDots(currentIndex);
  });
});

// Iniciar autoplay
setInterval(nextSlide, 4000);

// Pantalla de bienvenida

// Pantalla de bienvenida con animación
const cover = document.getElementById('cover');
const main = document.getElementById('main-content');
const music = document.getElementById('bg-music');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
  cover.classList.add('fade-out');
  main.classList.add('fade-in');

  setTimeout(() => {
    cover.style.display = 'none';
    main.style.display = 'block';
    music.play();
  }, 1000); // 1s igual a la duración de la animación
});

// Reproducir/pausar audio al hacer clic en la carta
function playAudio() {
  const audio = document.getElementById('miCancion');
  audio.paused ? audio.play() : audio.pause();
}
