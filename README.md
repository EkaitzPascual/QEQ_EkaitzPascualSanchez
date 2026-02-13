# Quien es Quien - Ghibli
Juego de adivinanza para la asignatura de DWEC
## Este github es la creacion de un juego de Quien es Quien
## Creado por Ekaitz Pascual
### Caracteristicas de la aplicacion
+ Personajes del Studio Ghibli
+ Uso de la API de Github para mostrar el perfil
+ Funcionalidad de resetear partida
### Funcionalidad del juego
| Acción | Resultado |
| :---  | :---: |
| Click Imagen | Aparece Miyazaki |
| Boton Reset | Reinicia tablero |
| Carga Pagina | Carga API Github |

### Enlace al github
[El enlace al github](https://github.com/EkaitzPascual)
### Foto logo Ghibli
![Logo Ghibli]([https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png](https://2img.net/image.noelshack.com/fichiers/2015/01/1420295889-studio-ghibli.png))
---

### Lineas de codigo
```JavaScript
async function obtenerDatosGithub() {
    const usuario = "EkaitzPascual"; 
    const url = `https://api.github.com/users/${usuario}`;
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error");
        const datos = await respuesta.json();
        // ... Logica para pintar el footer
    }
