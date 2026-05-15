//Funciones contactanos
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        alert('¡Solicitud Enviada! Nuestro equipo se pondrá en contacto contigo pronto.');
        contactForm.reset();
    });
}