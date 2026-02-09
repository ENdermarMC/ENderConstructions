

//buscador
//ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador );
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//declarando variables
bars_search = document.getElementById("ctn-bar-search");
cover_ctn_search =document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search=document.getElementById("boxSearch");

// Datos de construcciones para el buscador
const construcciones = [
    { title: "Ciudadela de Cristal", slug: "ciudadela-de-cristal" },
    { title: "Puente del Norte", slug: "puente-del-norte" },
    { title: "Torre Obsidiana", slug: "torre-obsidiana" },
    { title: "Jardin Astral", slug: "jardin-astral" },
    { title: "Puerto de Luz", slug: "puerto-de-luz" },
    { title: "Templo del Mar", slug: "templo-del-mar" },
];

const inConstrucciones = window.location.pathname.includes("/construcciones/");
const basePath = inConstrucciones ? "" : "construcciones/";

// Construye el listado del buscador si existe el contenedor
if (box_search) {
    const items = construcciones.map((c) => {
        const href = `${basePath}${c.slug}.html`;
        return `<li><a href="${href}"><i class="fa-solid fa-magnifying-glass"></i> ${c.title}</a></li>`;
    });
    box_search.innerHTML = items.join("");
}

//función para mostrar
function mostrar_buscador(){

    bars_search.style.top="80px";
    cover_ctn_search.style.display="block"
    inputSearch.focus();
    inputSearch.value = ""; // Borra el contenido del input
    box_search.style.display = "none"; // Oculta el contenedor de resultados
    // Oculta el contenedor de resultados
}


// Función para cerrar el buscador
function ocultar_buscador() {
    bars_search.style.top = "-10000px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = ""; // Borra el contenido del input
    box_search.style.display = "none"; // Oculta el contenedor de resultados
}



//creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

// Función para filtrar los resultados de búsqueda
function buscador_interno() {
    const filter = inputSearch.value.toUpperCase(); // Convierte el texto a mayúsculas
    const li = box_search.getElementsByTagName("li");
    let hasResults = false; // Variable para verificar si hay resultados

    // Recorre los elementos de la lista
    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        const textValue = a.textContent || a.innerText;

        // Verifica si el texto coincide con el filtro
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Muestra el elemento
            hasResults = true; // Hay al menos un resultado
        } else {
            li[i].style.display = "none"; // Oculta el elemento
        }
    }

    // Muestra u oculta el contenedor de resultados según el filtro
    if (filter === "" || !hasResults) {
        box_search.style.display = "none"; // Oculta si no hay resultados o el input está vacío
    } else {
        box_search.style.display = "block"; // Muestra si hay resultados
    }
}

// Agregar evento click a cada enlace en los resultados de búsqueda
const searchLinks = box_search.getElementsByTagName("a");
for (let i = 0; i < searchLinks.length; i++) {
    searchLinks[i].addEventListener("click", ocultar_buscador);
}

// Navegacion fija al hacer scroll (sin logica extra)
