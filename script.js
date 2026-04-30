// Función para mover el carrusel con las flechas
function moveSlide(trackId, dotsId, direction) {
    const track = document.getElementById(trackId); 
    
    // CLÁUSULA DE GUARDA: Si no hay carrusel en esta página, detenemos la función aquí.
    if (!track) return; 

    const slides = track.querySelectorAll('.carousel-slide'); // Busca todas las imágenes dentro del carrusel.
    const dotsContainer = document.getElementById(dotsId); //Busca el contenedor de los puntos de navegación.
    const dots = dotsContainer.querySelectorAll('.dot'); // Busca los puntos dentro del contenedor.
    
    // Encuentra la imagen actual, haciendo la lista un arreglo y buscando su posicion con la clase 'active'.   
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    // Oculta la imagen y despinta el puntito actual
    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    // Calcula la nueva posición
    let newIndex = activeIndex + direction;
    if (newIndex >= slides.length) newIndex = 0; // Si pasa de la última, vuelve a la primera
    if (newIndex < 0) newIndex = slides.length - 1; // Si retrocede en la primera, va a la última

    // Muestra la nueva imagen y pinta el puntito correspondiente
    slides[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');
}

// Auto-play: Cambia la imagen automáticamente cada 5 segundos
setInterval(() => {
    moveSlide('track1', 'dots1', 1);
    moveSlide('track2', 'dots2', 1);
}, 3000); // 3000 milisegundos = 3 segundos

