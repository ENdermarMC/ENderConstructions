



//buscador
const iconSearch = document.getElementById("icon-search");
const coverCtnSearch = document.getElementById("cover-ctn-search");
const bars_search = document.getElementById("ctn-bar-search");
const inputSearch = document.getElementById("inputSearch");
const box_search = document.getElementById("boxSearch");

if (iconSearch) iconSearch.addEventListener("click", mostrar_buscador);
if (coverCtnSearch) coverCtnSearch.addEventListener("click", ocultar_buscador);

// Datos de construcciones para el buscador
const construcciones = [
    { title: "Ciudadela de Cristal", slug: "ciudadela-de-cristal" },
    { title: "Puente del Norte", slug: "puente-del-norte" },
    { title: "Torre Obsidiana", slug: "torre-obsidiana" },
    { title: "Jardin Astral", slug: "jardin-astral" },
    { title: "Puerto de Luz", slug: "puerto-de-luz" },
    { title: "Templo del Mar", slug: "templo-del-mar" },
];

const baseDir = window.location.pathname.replace(/[^/]*$/, "");

// Construye el listado del buscador si existe el contenedor
if (box_search) {
    const items = construcciones.map((c) => {
        const href = `${baseDir}${c.slug}.html`;
        return `<li><a href="${href}"><i class="fa-solid fa-magnifying-glass"></i> ${c.title}</a></li>`;
    });
    box_search.innerHTML = items.join("");
    const searchLinks = box_search.getElementsByTagName("a");
    for (let i = 0; i < searchLinks.length; i++) {
        searchLinks[i].addEventListener("click", ocultar_buscador);
    }
}

//funciÃ³n para mostrar
function mostrar_buscador(){

    if (!bars_search || !coverCtnSearch || !inputSearch || !box_search) return;
    bars_search.style.top = "80px";
    coverCtnSearch.style.display = "block";
    inputSearch.focus();
    inputSearch.value = "";
    box_search.style.display = "none";
    // Oculta el contenedor de resultados
}


// FunciÃ³n para cerrar el buscador
function ocultar_buscador() {
    if (!bars_search || !coverCtnSearch || !inputSearch || !box_search) return;
    bars_search.style.top = "-10000px";
    coverCtnSearch.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";
}



//creando filtrado de busqueda

if (inputSearch) inputSearch.addEventListener("keyup", buscador_interno);

// FunciÃ³n para filtrar los resultados de bÃºsqueda
function buscador_interno() {
    const filter = inputSearch.value.toUpperCase(); // Convierte el texto a mayÃºsculas
    if (!box_search) return;
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

    // Muestra u oculta el contenedor de resultados segÃºn el filtro
    if (filter === "" || !hasResults) {
        box_search.style.display = "none"; // Oculta si no hay resultados o el input estÃ¡ vacÃ­o
    } else {
        box_search.style.display = "block"; // Muestra si hay resultados
    }
}

// Agregar evento click a cada enlace en los resultados de bÃºsqueda
// Navegacion fija al hacer scroll (sin logica extra)
