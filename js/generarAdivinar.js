const seccionAdivinar = document.createElement("div");
seccionAdivinar.style.border = "2px dashed #333";
seccionAdivinar.style.padding = "20px";
seccionAdivinar.style.textAlign = "center";
seccionAdivinar.style.marginTop = "20px";
seccionAdivinar.innerHTML = "<h2>¿Quién es tu personaje?</h2>";

// Insertamos antes del tablero para que se vea arriba (o abajo según prefieras)
document.body.insertBefore(seccionAdivinar, contenedorJuego); 

function seleccionarPersonajeIncognito() {
    // Limpiamos imagen anterior si existe
    const imagenAnterior = document.getElementById("img-incognito");
    if (imagenAnterior) imagenAnterior.remove();

    // Elegimos uno random DE LOS 16 QUE HAY EN EL TABLERO
    const indiceRandom = Math.floor(Math.random() * personajesEnTablero.length);
    const elegido = personajesEnTablero[indiceRandom];

    const img = document.createElement("img");
    img.id = "img-incognito";
    img.src = `imagenes/${elegido.img}`;
    img.style.border = "5px solid gold"; // Destacarlo
    
    seccionAdivinar.appendChild(img);
}

// Ejecutamos
seleccionarPersonajeIncognito();