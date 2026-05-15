//Funciones globales
//logica de barra de busqueda
const MAPA_SITIO = [
    { nombre: "Inicio", 
      url:"index.html", 
      keywords: [
        "inicio", 
        "home", 
        "bienvenida",
        "morgon",
        "index",
        "principal",
        "obras",
        "carouseles"
    ]},
    { nombre: "La Empresa", 
      url:"empresa.html", 
      keywords: [
        "empresa",
        "mision",
        "vision",
        "valores",
        "historia"
    ]},
    { nombre: "Servicios", 
      url:"servicios.html", 
      keywords: [
        "construccion",
        "diseño",
        "proyectos",
        "servicios",
        "creditos",
        "visitas",
        "garantias"
    ]},
    { nombre: "Servicios Express", 
      url:"serviciosExpress.html", 
      keywords: [
        "servicios express",
        "rapido",
        "urgente",
        "pinturas",
        "cimentacion",
        "remodelacion",
        "planos 3D",
        "instalaciones electricas",
        "reparacion de techos"
    ]},
    { nombre: "Contactanos", 
      url:"contacto.html", 
      keywords: [
        "telefono",
        "contacto",
        "correo",
        "direccion",
        "solicitud",
        "consulta",
        "contactanos",
        "contacto constructora",
        "email",
        "whatsapp"
    ]}
];

function ejecutarBusqueda() {
    const inputBuscar = document.querySelector('.search-bar');
    if (!inputBuscar) return;
    
    const termino = inputBuscar.value.toLowerCase();
    if (!termino) return;

    const destino = MAPA_SITIO.find(pagina => 
        pagina.nombre.toLowerCase().includes(termino) || 
        pagina.keywords.some(k => k.includes(termino))
    );

    if (destino) {
        window.location.href = destino.url;
    } else {
        alert("No se encontró la sección. Intenta con 'Servicios' o 'Contacto'.");
    }
}

// Asignamos los eventos de clic y Enter
const btnBuscar = document.querySelector('.search-btn');
if (btnBuscar) btnBuscar.addEventListener('click', ejecutarBusqueda);

const inputBuscar = document.querySelector('.search-bar');
if (inputBuscar) inputBuscar.addEventListener('keypress', (e) => { if (e.key === 'Enter') ejecutarBusqueda(); });