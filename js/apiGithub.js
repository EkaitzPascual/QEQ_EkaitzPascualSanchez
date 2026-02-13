// Función asíncrona para pedir datos (Slide 7.2 y 7.4)
async function obtenerDatosGithub() {
    const usuario = "EkaitzPascual";
    const url = `EkaitzPascual`;
    const contenedorGit = document.getElementById("github-container");

    try {
        // Esperamos la respuesta de la API (Promesa)
        const respuesta = await fetch(url);
        
        if (!respuesta.ok) {
            throw new Error("No se pudo conectar con GitHub");
        }

        // Convertimos el Stream a JSON (Slide 7.5)
        const datos = await respuesta.json();

        // Renderizamos los datos
        contenedorGit.innerHTML = `
            <div style="background: #f4f4f4; padding: 20px; margin-top: 30px; text-align: center; border-radius: 10px;">
                <h3>Desarrollado por:</h3>
                <a href="${datos.html_url}" target="_blank" title="Ir al perfil">
                    <img src="${datos.avatar_url}" alt="Avatar GitHub" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid #333;">
                </a>
                <p><strong>Usuario:</strong> ${datos.login}</p>
                <p><strong>Repositorios Públicos:</strong> ${datos.public_repos}</p>
            </div>
        `;

    } catch (error) {
        console.error("Error en la API de GitHub:", error);
        contenedorGit.innerHTML = "<p>Error al cargar el perfil de GitHub.</p>";
    }
}

// Llamada a la función asíncrona
obtenerDatosGithub();