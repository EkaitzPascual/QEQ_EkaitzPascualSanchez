// Simulamos una base de datos estructurada (JSON)
const datosPersonajes = [
    { id: 1, nombre: "Ashitaka", pelicula: "La princesa Mononoke", img: "Ashitaka.png" },
    { id: 2, nombre: "Calcifer", pelicula: "El castillo ambulante", img: "Calcifer.png" },
    { id: 3, nombre: "Chihiro Ogino", pelicula: "El viaje de Chihiro", img: "Chihiro.png" },
    { id: 4, nombre: "Haku", pelicula: "El viaje de Chihiro", img: "Haku.png" },
    { id: 5, nombre: "Howl Jenkins", pelicula: "El castillo ambulante", img: "Hawl.png" }, // Ojo, en tu carpeta dice Hawl.png
    { id: 6, nombre: "Jiji", pelicula: "Kiki: Entregas a domicilio", img: "Jiji.png" },
    { id: 7, nombre: "Mei Kusakabe", pelicula: "Mi vecino Totoro", img: "Mei.png" },
    { id: 8, nombre: "Miyazaki", pelicula: "Director", img: "miyazaki.jpeg" }, // Imagen especial
    { id: 9, nombre: "Nausicaä", pelicula: "Nausicaä del Valle del Viento", img: "Nausica.png" },
    { id: 10, nombre: "Pazu", pelicula: "El castillo en el cielo", img: "Pazu.png" },
    { id: 11, nombre: "Ponyo", pelicula: "Ponyo en el acantilado", img: "Ponyo.png" },
    { id: 12, nombre: "Porco Rosso", pelicula: "Porco Rosso", img: "Porco.png" },
    { id: 13, nombre: "San", pelicula: "La princesa Mononoke", img: "San.png" },
    { id: 14, nombre: "Satsuki Kusakabe", pelicula: "Mi vecino Totoro", img: "Satsuki.png" },
    { id: 15, nombre: "Sophie Hatter", pelicula: "El castillo ambulante", img: "Sophie.png" },
    { id: 16, nombre: "Sōsuke", pelicula: "Ponyo en el acantilado", img: "Sosuke.png" },
    { id: 17, nombre: "Totoro", pelicula: "Mi vecino Totoro", img: "Totoro.png" }
];

// Variable global para almacenar los 16 seleccionados
let personajesEnTablero = [];