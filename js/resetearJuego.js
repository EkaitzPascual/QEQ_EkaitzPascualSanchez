const btnReset = document.createElement("button");
btnReset.innerText = "🔄 RESETEAR JUEGO";
btnReset.style.display = "block";
btnReset.style.margin = "20px auto";
btnReset.style.padding = "10px 20px";
btnReset.style.fontSize = "1.2em";
btnReset.style.cursor = "pointer";

document.body.appendChild(btnReset);

btnReset.addEventListener("click", () => {
    const confirmacion = confirm("¿Estás seguro de que quieres reiniciar la partida? Se perderá el progreso.");
    
    if (confirmacion) {
        // Volvemos a llamar a las funciones de los otros archivos
        pintarTablero();
        seleccionarPersonajeIncognito();
    }
});