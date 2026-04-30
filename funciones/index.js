// Función para mover el carrusel con las flechas
function moveSlide(trackId, dotsId, direction) {
    const track = document.getElementById(trackId); 
    if (!track) return;
    
    const slides = track.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById(dotsId);
    const dots = dotsContainer.querySelectorAll('.dot');
    
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    let newIndex = activeIndex + direction;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;

    slides[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');
}

function jumpToSlide(trackId, dotsId, index) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById(dotsId);
    const dots = dotsContainer.querySelectorAll('.dot');

    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Auto-play: Cambia la imagen automáticamente cada 3 segundos
setInterval(() => {
    moveSlide('track1', 'dots1', 1);
    moveSlide('track2', 'dots2', 1);
}, 3000);