async function obtenerDatosGithub() {
    // Tu usuario real
    const usuario = "EkaitzPascual"; 
    const url = `https://api.github.com/users/${usuario}`;
    const contenedorGit = document.getElementById("github-container");

    try {
        const respuesta = await fetch(url);
        
        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: No se pudo conectar con GitHub`);
        }

        const datos = await respuesta.json();

        // Creamos el footer con tus datos
        contenedorGit.innerHTML = `
            <div style="background: #f0f0f0; border-top: 2px solid #ccc; padding: 20px; margin-top: 50px; text-align: center; font-family: sans-serif;">
                <h3 style="margin-bottom: 10px; color: #333;">Desarrollado por:</h3>
                
                <a href="${datos.html_url}" target="_blank" style="text-decoration: none;">
                    <img src="${datos.avatar_url}" alt="Foto de ${datos.login}" 
                         style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid #2da44e; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </a>
                
                <p style="font-size: 1.2em; font-weight: bold; margin: 10px 0;">
                    ${datos.name || datos.login}
                </p>
                
                <p style="color: #666;">
                    Repositorios públicos: <strong>${datos.public_repos}</strong>
                </p>
            </div>
        `;

    } catch (error) {
        console.error("Error en la API de GitHub:", error);
        contenedorGit.innerHTML = `<p style="color: red; text-align: center;">Error al cargar el perfil de GitHub (Revisa la consola).</p>`;
    }
}

// Ejecutamos la función
obtenerDatosGithub();