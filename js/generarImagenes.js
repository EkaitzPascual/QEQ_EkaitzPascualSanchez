const contenedorJuego = document.getElementById("juego-container");

// Creamos la estructura visual
const seccionTablero = document.createElement("div");
seccionTablero.style.display = "grid";
seccionTablero.style.gridTemplateColumns = "repeat(4, 1fr)";
seccionTablero.style.gap = "10px";
seccionTablero.style.marginBottom = "20px";
contenedorJuego.appendChild(seccionTablero);

function pintarTablero() {
    seccionTablero.innerHTML = ""; // Limpiar tablero
    
    // 1. Filtrar a Miyazaki (no debe salir en la selección aleatoria inicial)
    const pool = datosPersonajes.filter(p => p.nombre !== "Miyazaki");
    
    // 2. Ordenar aleatoriamente y cortar los primeros 16
    personajesEnTablero = pool.sort(() => 0.5 - Math.random()).slice(0, 16);

    // 3. Generar HTML
    personajesEnTablero.forEach(personaje => {
        const tarjeta = document.createElement("div");
        tarjeta.style.border = "1px solid #ccc";
        tarjeta.style.textAlign = "center";
        tarjeta.style.padding = "10px";

        const img = document.createElement("img");
        img.src = `imagenes/${personaje.img}`;
        img.style.cursor = "pointer";
        img.dataset.original = `imagenes/${personaje.img}`; // Guardamos ruta original
        img.dataset.esMiyazaki = "false";

        // Evento Click: Toggle Miyazaki
        img.addEventListener("click", () => {
            if (img.dataset.esMiyazaki === "false") {
                img.src = "imagenes/miyazaki.jpeg";
                img.dataset.esMiyazaki = "true";
            } else {
                img.src = img.dataset.original;
                img.dataset.esMiyazaki = "false";
            }
        });

        // Textos
        const h3 = document.createElement("h3");
        h3.innerText = personaje.nombre;
        h3.style.fontSize = "1em";

        const p = document.createElement("p");
        p.innerText = personaje.pelicula;
        p.style.fontSize = "0.8em";

        tarjeta.append(img, h3, p);
        seccionTablero.appendChild(tarjeta);
    });
}

pintarTablero();